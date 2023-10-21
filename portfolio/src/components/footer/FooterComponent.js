import React from 'react'
import './FooterComponent.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterComponent = () => {

    const navigateToGithub = () =>{
        window.open("https://github.com/bujakkristijan");
    }

    const navigateToLinkedin = () =>{
        window.open("https://rs.linkedin.com/in/kristijan-bujak-75a621122?trk=public_profile_browsemap");
    }

  return (
    <div className='footer-main-container'>
        <ul className='nav-ul'>
                {/* <li><a href='#about' onClick = {() => scrollToComponent('about')}>About</a></li> */}
                <li><a href='#about'>Experience</a></li>
                <li><a href='#experience'>Skills</a></li>
                {/* <li><a href='#projects' onClick = {() => scrollToComponent('projects')}>Projects</a></li> */}
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='icons-container'>
            <FontAwesomeIcon className='github-icon' icon={faGithub}  onClick={navigateToGithub}/>
            <FontAwesomeIcon className='linkedin-icon' icon={faLinkedinIn} onClick={navigateToLinkedin}/>
        </div>
        <div className='text-footer'>
            © 2023 Kristijan Bujak. All rights reserved.
        </div>
    </div>
  )
}

export default FooterComponent