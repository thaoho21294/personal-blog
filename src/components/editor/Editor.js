import React, { useMemo, useCallback } from 'react'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor } from 'slate'
import isHotkey from 'is-hotkey'
import useEditorConfig from './useEditorConfig'
import useSelection from './useSelection'
import MarkButton from './MarkButton'
import BlockButton from './BlockButton'
import Toolbar from './Toolbar'
import { HOTKEYS } from '../../constants'
import { toggleMark } from '../../utils/editor'

const Editor = ({ document, onChange }) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const { renderElement, renderLeaf } = useEditorConfig(editor)
  const [selection, setSelection] = useSelection(editor)

  const onChangeHandler = useCallback(
    (document) => {
      onChange(document)
    },
    [editor.selection, onChange, setSelection],
  )

  return (
    <Slate editor={editor} value={document} onChange={onChangeHandler}>
      <Toolbar>
        <MarkButton format='bold' icon='format_bold' />
        <MarkButton format='italic' icon='format_italic' />
        <MarkButton format='underline' icon='format_underlined' />
        <MarkButton format='code' icon='code' />
        <BlockButton format='heading-one' icon='looks_one' />
        <BlockButton format='heading-two' icon='looks_two' />
        <BlockButton format='block-quote' icon='format_quote' />
        <BlockButton format='numbered-list' icon='format_list_numbered' />
        <BlockButton format='bulleted-list' icon='format_list_bulleted' />
        <BlockButton format='left' icon='format_align_left' />
        <BlockButton format='center' icon='format_align_center' />
        <BlockButton format='right' icon='format_align_right' />
        <BlockButton format='justify' icon='format_align_justify' />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder='Enter some rich text…'
        spellCheck
        autoFocus
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
