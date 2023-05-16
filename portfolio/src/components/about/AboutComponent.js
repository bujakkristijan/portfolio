import React from 'react'
import './AboutComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBriefcase,   } from '@fortawesome/free-solid-svg-icons'
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';

const AboutComponent = () => {

    const navigateToBitbucketFrontend = () =>{
        window.open("https://bitbucket.org/gajinjovan/meal-order-fe/src/develop/");
    }

    const navigateToBitbucketBackend = () =>{
        window.open("https://bitbucket.org/gajinjovan/meal-order-be/src/develop/");
    }

  return (
    <div id='about' className='about-main-container'>
        <p className='about-small-title'>Get To Know More</p>
        <h1 className='about-title'>About me</h1>
        <div className='about-container'>
            <div className='about-image-container'>
                <img className='about-image' src={require('../../images/about-pic-edited.png')} alt=''></img>
            </div>
            <div className='about-details-container'>
                <div className='details-container'>
                    <div className='detail-container'>
                        <FontAwesomeIcon className='fa-icon' icon={faBriefcase} />
                        <div className='detail-title'>Experience</div>
                        <div className='detail-text'>Student internship at Simple Task</div>
                        <div className='detail-text'>Angular frontend developer</div>
                        <div className='detail-text'>April 2022 </div>
                        <br></br>
                        <div >Food ordering application from scratch using Spring Boot and Angular frameworks with two teammates</div>
                        <div className='bitbucket-container'>
                            <div className='frontent-container'>
                                Frontend 
                                <FontAwesomeIcon className='fa-bitbucket' onClick={navigateToBitbucketFrontend} icon={faBitbucket} />
                            </div>
                            <div className='backend-container'>
                                Backend 
                                <FontAwesomeIcon className='fa-bitbucket' onClick={navigateToBitbucketBackend} icon={faBitbucket} />
                            </div>
                            
                        </div>
                    </div>
                    <div className='detail-container'>
                        <FontAwesomeIcon className='fa-icon' icon={faAward} />
                        <div className='detail-title'>Education</div>
                        <div className='detail-text'>Electrical and Computer Engineer</div>
                        <div className='detail-text'>Technical school Kikinda</div>
                        <br></br>
                        <br></br>
                        <div id='text-degree' className='detail-text'>Bachelor's degree</div>
                        <div className='detail-text'>Software and Information Technologies</div>
                        <div className='detail-text'>Faculty of Technical Sciences</div>
                        <div className='detail-text'>University of Novi Sad</div>
                    </div>
                </div>
                <div className='text-details-container'>
                    I'm recently graduated software developer with a Bachelor's degree, based in Novi
                    Sad, Serbia. Over the past year, I have found myself most comfortable working
                    with React (Hooks) library and Java Spring Boot framework for software
                    development. Seeking my first job or an internship opportunity where I'd like to
                    expand my knowledge and be of use to the company.                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent