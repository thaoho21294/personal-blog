import React from 'react'
import './Card.scss'

const Card = ({ title, subTitle, children }) => {
  return (
    <div className='card'>
      {title && <h3 className='title card-title'>{title}</h3>}
      {subTitle && <h4 className='sub-title'>{subTitle}</h4>}
      <div className='content'>{children}</div>
    </div>
  )
}

export default Card
