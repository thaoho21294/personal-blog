import React from 'react'
import me from '../assets/me.jpg'

const About = () => {
  return (
    <div className='small-container' style={{ display: 'flex' }}>
      <p>
        Thao is a frontend developer with 5 years experience. She have passion
        on JavaScript and ReactJS. She currently live in Ho Chi Minh City. She
        create this blog to share her knowleges, experiences and practice coding
        skills.
      </p>
      <img alt='profile' width={200} src={me} />
    </div>
  )
}

export default About
