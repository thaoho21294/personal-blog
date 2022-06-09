import React from 'react'
import './JobCard.scss'

const JobCard = ({ title, time, company, children }) => {
  return (
    <div className='job-card'>
      <h4 className='sub-title job-card-header'>
        <span>{title}</span>
        <span>
          {time[0]} - {time[1]}
        </span>
      </h4>
      <div className='title company'>{company}</div>
      <div className='description'>{children}</div>
    </div>
  )
}

export default JobCard
