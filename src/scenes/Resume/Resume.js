import React from 'react'
import { LocationOn, Phone, Email, Cloud } from '@mui/icons-material'
import './Resume.scss'
import me from '../../assets/me.jpg'
import Row from 'scenes/Resume/components/Row'
import Card from './components/Card'
import JobCard from './components/JobCard'

const Resume = () => {
  return (
    <div className='medium-container resume'>
      <div className='header'>
        <div className='name'>
          <span className='firstname'>Thao</span> Ho
        </div>
        <div className='role'>middle frontend developer</div>
      </div>
      <img className='avatar' src={me}></img>
      <div className='content'>
        <Row>
          <div className='contact'>
            <div>
              <LocationOn /> Go Vap, Ho Chi Minh
            </div>
            <div>
              <Phone /> 0376857350
            </div>
            <div>
              <Email /> thaoho21294@gmail.com
            </div>
            <div>
              <Cloud /> live:thaoho21294
            </div>
          </div>
          <Card title='profile'>
            An independent, eager, open-mind software engineer specializing in
            React working on various projects from both American, Singapore
            customers. Strong experience in Front-end technique but also worked
            with Back-end. For now, I want to become a proficient senior
            front-end engineer who can propose good solutions and write
            high-quality codes.
          </Card>
        </Row>
        <Row>
          <Card title='skills' subTitle='technical'>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Webpack</li>
            </ul>
          </Card>
          <Card title='experience'>
            <JobCard
              title='Senior Frontend Developer'
              time={['06/2020', '06/2022']}
              company='S3 Corp'
            >
              Worked directly with Singaporean developers, product owners,
              designers, on 2 projects, tenant and energy management, which have
              forms, tables, charts.
              <ul>
                <li>
                  Techniques:
                  <ul>
                    <li>
                      FE: React 16, redux, redux-thunk, typescript, single-spa
                      (micro-frontend) redux-toolkit, docker, webpack, formik,
                      e-chart, react-table, xlsx, react-testing-library.
                    </li>
                    <li>BE: golang, graphQL, postgresql.</li>
                    <li>E2E: Cypress.</li>
                  </ul>
                </li>
                <li>
                  Responsibilities:
                  <ul>
                    <li>
                      Implement features, write unit-test, write automation
                      tests, demo.
                    </li>
                    <li>
                      Document, review code, refactor code, upgrade libraries.
                    </li>
                    <li>Mentor, interview.</li>
                  </ul>
                </li>
              </ul>
            </JobCard>
          </Card>
          <Card subTitle='profesional'>
            <ul>
              <li>Problem Solving</li>
              <li>Accuracy</li>
              <li>Teamwork</li>
              <li>Self-development</li>
              <li>Mentor</li>
            </ul>
          </Card>
        </Row>
        <Row className='page-break-before'>
          <Card title='education'>
            <div className='sub-title'>
              <strong>Software Engineering</strong>
            </div>
            <div>University of Technology</div>
            <ul>
              <li>GPA: 7.9/10</li>
              <li>2012 - 2017 (4.5 years)</li>
              <li>TOEIC: 630/990</li>
            </ul>
          </Card>
          <JobCard
            title='frontend developer'
            time={['03/2017', '06/2020']}
            company='kms technology'
          >
            <ul>
              <li>
                React (2 years): Restaurant Management Website.
                <ul>
                  <li>
                    Techniques:
                    <ul>
                      <li>FE: React 15, ES6, Redux, redux-observable.</li>
                      <li>BE: Microservice, Node.js, MySQL, S3</li>
                    </ul>
                  </li>
                  <li>
                    Responsibilities:
                    <ul>
                      <li>
                        Implement UI, fix bugs, write unit-test, analyze
                        stories, demo.
                      </li>
                      <li>Implement API, write automation test.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Angular (6 months): Hotel Management System
                <ul>
                  <li>
                    Techniques: Angular 8, RxJS, Observable, CSS, Jasmine.
                  </li>
                  <li>
                    Responsibilities: Implement features, fix bugs, write
                    unit-test, analyze stories.
                  </li>
                </ul>
              </li>
            </ul>
          </JobCard>
          <Card title='Activities' subTitle='technical'>
            <ul>
              <li>Unit-test technical sharing 2022</li>
              <li>KMS Hackathon 2018</li>
              <li>Seeking ideas about GIS contest 2016</li>
            </ul>
          </Card>
        </Row>
        <Row>
          <Card title='Interests'>
            <ul>
              <li>Learning</li>
              <li>Programing</li>
              <li>Training</li>
              <br />
              <li>Badminton</li>
              <li>Music</li>
            </ul>
          </Card>
          <Card title='References'>
            <ul>
              <li>
                Todo Project:{' '}
                <a href='https://github.com/thaoho21294/react-redux-demo'>
                  react-redux-demo
                </a>
              </li>
              <li>
                Personal Blog Project:{' '}
                <a href='https://github.com/thaoho21294/personal-blog'>
                  personal-blog
                </a>
              </li>
              <li>
                Unit-test slice:{' '}
                <a href='https://docs.google.com/presentation/d/1_7mHa56qi5Dz8Nuir9vVG0JuSpcc1t2dUtIMJ1VgRus/edit#slide=id.g11cda348ae2_0_13'>
                  ReactJS Testing
                </a>
              </li>
            </ul>
          </Card>
        </Row>
      </div>
    </div>
  )
}

export default Resume
