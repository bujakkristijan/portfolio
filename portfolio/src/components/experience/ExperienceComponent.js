import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase  } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJs, faCss3, faAngular, faReact, faJava, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import './ExperienceComponent.css'

const ExperienceComponent = () => {
  return (
    <div className='experience-main-container'>
        <h1 className='experience-title'>
            Experience
        </h1>
        <div className='experience-details-container'>
            <div className='about-containers'>
                <div className='details-containers'>
                    <h2 className='experience-sub-title'>Frontend development</h2>
                </div>
            </div>
        </div>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faAngular} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faDatabase} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faPython} />
        
    </div>
  )
}

export default ExperienceComponent