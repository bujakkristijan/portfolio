import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase  } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJs, faCss3, faAngular, faReact, faJava, faGithub, faPython, faAndroid } from '@fortawesome/free-brands-svg-icons';
import './ExperienceComponent.css'

const ExperienceComponent = () => {
  return (
    <div id='experience' className='experience-main-container'>
        <p className='experience-small-title'>Explore My</p>
        <h1 className='experience-title'> Experience</h1> 
            <div className='experience-details-container'>
                <div className='details-containers'>
                    <h2 className='experience-sub-title'>Frontend development</h2>
                    <div className='article-main-container'>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faHtml5} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>HTML</div>
                                <p className='article-technology-level'>Intermediate </p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faCss3} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>CSS</div>
                                <p className='article-technology-level'>Intermediate</p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faJs} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>JavaScript</div>
                                <p className='article-technology-level'>Experienced</p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faReact} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>React</div>
                                <p className='article-technology-level'>Experienced</p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faAngular} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>Angular</div>
                                <p className='article-technology-level'>Intermediate </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details-containers'>
                    <h2 className='experience-sub-title'>Backend development</h2>
                    <div className='article-main-container'>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faJava} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>Java Spring</div>
                                <p className='article-technology-level'>Experienced</p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faDatabase} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>MySql</div>
                                <p className='article-technology-level'>Intermediate</p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>Github</div>
                                <p className='article-technology-level'>Intermediate</p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faPython} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>Python</div>
                                <p className='article-technology-level'>Basic</p>
                            </div>
                        </div>
                        <div className='article-container'>
                            <FontAwesomeIcon className="fa-icon" icon={faAndroid} />
                            <div className='article-details-container'>
                                <div className='article-techology-title'>Android Studio</div>
                                <p className='article-technology-level'>Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
    </div>
  )
}

export default ExperienceComponent