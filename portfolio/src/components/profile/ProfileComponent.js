import React from 'react'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProfileComponent.css'

const ProfileComponent = () => {
     
    const navigateToGithub = () =>{
        window.open("https://github.com/bujakkristijan");
    }

    const navigateToLinkedin = () =>{
        window.open("https://rs.linkedin.com/in/kristijan-bujak-75a621122?trk=public_profile_browsemap");
    }

    const downloadCV = () =>{
        window.open('/cv-file/CV.pdf'); /* mora cv u public da stoji */
    }

    const scrollToProjects = () => {
        window.location.href = '#projects';
      };

  return (
    <div id='profile' className='profile-container'>
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
                    <button onClick={downloadCV} className='btn-download-cv'>Download CV</button>
                </div>
                <div className='btn-projects-container'>
                    <button className='btn-projects' onClick={scrollToProjects}>My projects</button>
                </div>
            </div>
            <div className='socials-container'>
                    <FontAwesomeIcon className='github-icon' icon={faGithub}  onClick={navigateToGithub}/>
                    <FontAwesomeIcon className='linkedin-icon' icon={faLinkedinIn} onClick={navigateToLinkedin}/>
            </div>
         </div>  
    </div>
  )
}

export default ProfileComponent