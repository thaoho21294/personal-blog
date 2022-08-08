import React from 'react'
import Code from '../code/Code'

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'paragraph':
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
    case 'h1':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 style={style} {...attributes}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 style={style} {...attributes}>
          {children}
        </h4>
      )
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    case 'code':
      return (
        <Code language='javascript' {...attributes}>
          {children}
        </Code>
      )
    case 'code-line':
      return <div>{children}</div>
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

export default Element
