import React from 'react'
import './Row.scss'

const Row = ({ children }) => {
  return (
    <div className='row'>
      <div className='left-column'>
        {children[0]}
        {children[2]}
      </div>
      <div className='right-column'>{children[1]}</div>
    </div>
  )
}

export default Row
