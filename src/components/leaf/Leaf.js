import React from 'react'
import CodeLeaf from '../code-leaf/CodeLeaf'

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return (
    <CodeLeaf attributes={attributes} type={leaf.type}>
      {children}
    </CodeLeaf>
  )
}

export default Leaf
