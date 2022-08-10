import React, { useCallback } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSlate } from 'slate-react'
import { PARAGRAPH_STYLES } from '../../constants'
import { toggleBlockType, getTextBlockStyle } from 'utils/editor'

export default function BlockTypeSelect() {
  const editor = useSlate()
  const onBlockTypeChange = useCallback(
    (event) => {
      if (event.target.value === 'multiple') {
        return
      }
      toggleBlockType(editor, event.target.value)
    },
    [editor],
  )

  const blockType = getTextBlockStyle(editor)

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <Select
        variant='standard'
        value={blockType}
        onChange={onBlockTypeChange}
        fullWidth
      >
        {PARAGRAPH_STYLES.map((blockType) => (
          <MenuItem key={blockType} value={blockType}>
            {blockType}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
