import React from 'react'
import './AboutComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBriefcase,   } from '@fortawesome/free-solid-svg-icons'
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutComponent = () => {

    const navigateToBitbucketFrontend = () =>{
        window.open("https://bitbucket.org/gajinjovan/meal-order-fe/src/develop/");
    }

    const navigateToBitbucketBackend = () =>{
        window.open("https://bitbucket.org/gajinjovan/meal-order-be/src/develop/");
    }

    const navigateToInternFigmaApp = () =>{
        window.open("https://github.com/bujakkristijan/internship-studio-present-react");
    }

  return (
    <div id='about' className='about-main-container'>
        <p className='about-small-title'>Get To Know More About My</p>
        <h1 className='about-title'>Experience</h1>
        <div className='about-container'>
            {/* <div className='about-image-container'>
                <img className='about-image' src={require('../../images/about-pic-edited.png')} alt=''></img>
            </div> */}
            <div className='about-details-container'>
                <div className='details-container'>
                    <div className='detail-container'>
                        <FontAwesomeIcon className='fa-icon' icon={faBriefcase} />
                        <div className='detail-title'>Internship</div>
                        <div className='detail-text'>Frontend developer</div>
                        <div className='detail-text'>Studio Present, Subotica</div>
                        <div className='detail-text'>September 2023 - two weeks </div>
                        <br></br>
                        <div className='detail-text'>Design from Figma has been transformed into a fully responsive web application</div>
                        
                        <div className='intern-gh-container'>
                            <div className='intern-text'>Source code</div>
                            <FontAwesomeIcon className='github-intern-icon' onClick={navigateToInternFigmaApp} icon={faGithub}/>
                        </div>
                            
                            
                        
                    </div>

                    <div className='detail-container'>
                        <FontAwesomeIcon className='fa-icon' icon={faBriefcase} />
                        <div className='detail-title'>Student internsip</div>
                        <div className='detail-text'>Software developer</div>
                        <div className='detail-text'>Simple Task LLC, Novi Sad</div>
                        <div className='detail-text'>April 2022 - one month </div>
                        <br></br>
                        <div className='detail-text'>Food ordering application from scratch using Spring Boot and Angular frameworks with two teammates</div>
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
                    <div className='text-title-experience'>Internship - Studio Present, Subotica</div>
                    <div className='text-title-experience'>18/09/2023 - 29/09/2023</div>
                    <br></br>
                    I transformed a design from Figma and completed tasks from Trello, which included necessary functionalities
                    for the website, as part of a two-week internship program.
                    <br></br><br></br>
                    Initially, I developed the project using Vanilla JS. After completing that phase, I transformed my Vanilla JS
                    application into a React (Hooks) application, keeping the same design and functionalities.
                    <br></br><br></br>
                    Features: Responsive design, Image slider (Swiper), Hamburger menu, Dark/Light mode, Popup message,
                    Parallax scrolling effect, Loading brands and products from a JSON file (in React app).
                    <br></br><br></br>
                    Technologies: React (Hooks)/JS, SCSS (Gulp)/CSS, Swiper.js.

                </div>
                <div className='text-details-container'>
                    <div className='text-title-experience'>Student Internship - Simple Task LLC, Novi Sad</div>
                    <div className='text-title-experience'>April 2022</div>
                    <br></br>
                    I was part of a team with two other teammates during a one-month student internship program.
                    We developed a food ordering application from scratch using Java Spring Boot and Angular frameworks.
                    <br></br><br></br>
                    The application sends a daily email to all employees containing a link that allows them to view the daily offers
                    and order food from the restaurant. Each day, a randomly chosen user is assigned the task of collecting
                    money from others and tracking who has paid.
                    <br></br><br></br>
                    In this project, I worked on the frontend application using Angular and completed several tasks related to the
                    backend application using Java Spring Boot. These tasks included implementing Spring Security with JSON
                    web token, creating the database and defining entity relations using Hibernate, and implementing various
                    REST API endpoints.
                    <br></br><br></br>
                    We used Bitbucket as our repository and SourceTree tool for Git management. Each feature was developed on
                    its own branch and then merged into the develop branch once it was functioning correctly.
                    <br></br><br></br>
                    Technologies: TypeScript, Angular (Angular Material, Bootstrap, canActivate - RoleGuard/AuthGuard), Java
                    Spring Boot, Spring Security with JWT, REST API, Hibernate, MySql. 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent