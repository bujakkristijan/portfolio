import React from 'react'
import './AboutComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBriefcase  } from '@fortawesome/free-solid-svg-icons'


const AboutComponent = () => {
  return (
    <div className='about-main-container'>
        <p className='about-small-title'>Get To Know More</p>
        <h1 className='about-title'>About me</h1>
        <div className='about-container'>
            <div className='about-image-container'>
                <img className='about-image' src={require('../../images/about-pic.png')} alt=''></img>
            </div>
            <div className='about-details-container'>
                <div className='details-container'>
                    <div className='detail-container'>
                        <FontAwesomeIcon className='fa-icon' icon={faAward} />
                        <div className='detail-title'>Experience</div>
                        <div className='detail-text'>Student internship at Simple Task</div>
                        <div className='detail-text'>Angular frontend developer</div>
                        <div className='detail-text'>April 2022 </div>
                    </div>
                    <div className='detail-container'>
                        <FontAwesomeIcon className='fa-icon' icon={faBriefcase} />
                        <div className='detail-title'>Education</div>
                        <div className='detail-text'>Electrical and Computer Engineer</div>
                        <div className='detail-text'>Technical school Kikinda</div>
                        <br></br>
                        <div className='detail-text'>Bachelor's degree</div>
                        <div className='detail-text'>Software and Information Technologies</div>
                        <div className='detail-text'>Faculty of Technical Sciences</div>
                        <div className='detail-text'>University of Novi Sad</div>
                    </div>
                </div>
                <div className='text-details-container'>
                    I'm recently graduated software developer with Bachelor's degree and no working experience based in Novi Sad, Serbia. In the last time I find myself most comfortable with React library and Java Spring Boot for software development. Seeking for my first job or an internship where I'd like to expend my knowledge and be of use to the company. 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent