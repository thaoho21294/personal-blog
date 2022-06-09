import React from 'react'

const Card = ({ title, subTitle, children }) => {
  return (
    <div className='card'>
      <h3 className='title'>{title}</h3>
      {subTitle && <h4 className='sub-title'>{subTitle}</h4>}
      <div className='content'>{children}</div>
    </div>
  )
}

export default Card
