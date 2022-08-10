import React from 'react'
import './Row.scss'

const Row = ({ children, className }) => {
  return (
    <div className={`row ${className}`}>
      <div className='left-column'>
        {children[0]}
        {children[2]}
      </div>
      <div className='right-column'>{children[1]}</div>
    </div>
  )
}

export default Row
