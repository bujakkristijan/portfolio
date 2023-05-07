import React from 'react'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProfileComponent.css'

const ProfileComponent = () => {
     
    const navigateToGithub = () =>{
        window.open("https://github.com/bujakkristijan");
    }

  return (
    <div className='profile-container'>
        <div className='profile-image-container'>
            <img className='profile-image' src={require('../../images/profile3bw.png')} alt=''></img>
        </div>
        <div className='profile-text-main-container'>
            <div className='profile-text-container'>
                <p className='text-p1'>Hello, I'm</p>
                <h1 className='title'>Kristijan Bujak</h1>
                <p className='text-p2'>Software developer</p>
            </div>
            <div className='button-container'>
                <div className='btn-cv-container'>
                    <button className='btn-download-cv'>Download CV</button>
                </div>
                <div className='btn-projects-container'>
                    <button className='btn-projects'>My projects</button>
                </div>
                <div className='socials-container'>
                    <FontAwesomeIcon icon={faGithub}  onClick={navigateToGithub}/>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileComponent