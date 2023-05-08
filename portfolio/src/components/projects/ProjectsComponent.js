import React from 'react'
import './ProjectsComponent.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsComponent = () => {
  return (
    <div className='projects-main-container'>
        <p className='projects-small-title'>Browse My Recent</p>
        <div className='projects-big-title'>Projects</div>
        <div className='projects-container'>
            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/foodapp.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Food ordering application
                    </div>
                    <div className='project-description'>
                        This is my Bachelor project as a student. The main purpose of the application is to allow the user to view the offer and order food from the restaurant, then track status of the order.
                    </div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project'>
                        Github source code
                        <FontAwesomeIcon className='btn-github-icon' icon={faGithub}/>
                    </div>
                </div>
               
                    
                
            </div>
        </div>
    </div>
  )
}

export default ProjectsComponent