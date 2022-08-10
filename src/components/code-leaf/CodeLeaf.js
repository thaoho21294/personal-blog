import React from 'react'

const CODE_COLOR = {
  comment: 'slategray',
  operator: '#9a6e3a',
  url: '#9a6e3a',
  keyword: '#07a',
  variable: '#e90',
  regex: '#e90',
  number: '#905',
  boolean: '#905',
  tag: '#905',
  constant: '#905',
  symbol: '#905',
  'attr-name': '#905',
  selector: '#905',
  punctuation: '#999',
  string: '#690',
  char: '#690',
  function: '#dd4a68',
  'class-name': '#dd4a68',
}

const CodeLeaf = ({ attributes, type, children }) => {
  return (
    <span
      {...attributes}
      style={{
        color: CODE_COLOR[type],
      }}
    >
      {children}
    </span>
  )
}

export default CodeLeaf
