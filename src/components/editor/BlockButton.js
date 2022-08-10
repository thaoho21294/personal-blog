import React from 'react'
import { useSlate } from 'slate-react'
import Button from 'components/button'
import Icon from 'components/icon'
import { isBlockActive, toggleBlock } from 'utils/editor'
import { TEXT_ALIGN_TYPES } from '../../constants'

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
      )}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default BlockButton
