import React, { useMemo, useCallback, useEffect, useRef } from 'react'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor, Text } from 'slate'
import Prism from 'prismjs'
import isHotkey from 'is-hotkey'
import {
  BlockButton,
  MarkButton,
  Toolbar,
  Element,
  Leaf,
  BlockTypeSelect,
} from './components'
import { HOTKEYS } from '../../constants'
import { toggleMark } from 'utils/editor'

const Editor = ({ content, onChange, readOnly, forceUpdate }) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])

  const codeLineRef = useRef(false)

  const decorate = useCallback(([node, path]) => {
    const ranges = []
    if (node.type === 'code-line') {
      codeLineRef.current = true
    }

    if (!codeLineRef.current || !Text.isText(node)) {
      return ranges
    }

    // TODO: allow to change language
    const tokens = Prism.tokenize(node.text, Prism.languages.javascript)
    let start = 0

    for (const token of tokens) {
      const length = getLength(token)
      const end = start + length

      if (typeof token !== 'string') {
        ranges.push({
          [token.type]: true,
          anchor: { path, offset: start },
          focus: { path, offset: end },
        })
      }

      start = end
    }
    codeLineRef.current = false
    return ranges
  }, [])

  useEffect(() => {
    editor.children = content
    editor.onChange()
  }, [forceUpdate])

  return (
    <Slate editor={editor} value={content} onChange={onChange}>
      {!readOnly && (
        <Toolbar>
          <BlockTypeSelect />
          <MarkButton format='bold' icon='format_bold' />
          <MarkButton format='italic' icon='format_italic' />
          <MarkButton format='underline' icon='format_underlined' />
          <BlockButton format='code' icon='code' />
          <BlockButton format='block-quote' icon='format_quote' />
          <BlockButton format='numbered-list' icon='format_list_numbered' />
          <BlockButton format='bulleted-list' icon='format_list_bulleted' />
          <BlockButton format='left' icon='format_align_left' />
          <BlockButton format='center' icon='format_align_center' />
          <BlockButton format='right' icon='format_align_right' />
          <BlockButton format='justify' icon='format_align_justify' />
        </Toolbar>
      )}
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder='Enter the title...'
        spellCheck
        autoFocus
        decorate={decorate}
        readOnly={readOnly}
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
    </Slate>
  )
}

const getLength = (token) => {
  if (typeof token === 'string') {
    return token.length
  } else if (typeof token.content === 'string') {
    return token.content.length
  } else {
    return token.content.reduce((l, t) => l + getLength(t), 0)
  }
}

export default Editor
