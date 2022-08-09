import React from 'react'
import { useSlate } from 'slate-react'
import Button from 'components/button'
import Icon from 'components/icon'
import { isMarkActive, toggleMark } from 'utils/editor'

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default MarkButton
