import React, { useMemo, useCallback, useEffect } from 'react'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor } from 'slate'
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

  useEffect(() => {
    if (forceUpdate) {
      editor.children = content
      if (editor.children.length) {
        editor.selection = {
          anchor: {
            path: [1, 0],
            offset: 1,
          },
          focus: {
            path: [1, 0],
            offset: 1,
          },
        }
      }
      editor.onChange()
    }
  }, [forceUpdate])

  return (
    <Slate editor={editor} value={content} onChange={onChange}>
      {!readOnly && (
        <Toolbar>
          <BlockTypeSelect />
          <MarkButton format='bold' icon='format_bold' />
          <MarkButton format='italic' icon='format_italic' />
          <MarkButton format='underline' icon='format_underlined' />
          <MarkButton format='code' icon='code' />
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
        placeholder='Enter some rich text…'
        spellCheck
        autoFocus
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

export default Editor
