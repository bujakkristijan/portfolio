import React from 'react'
import './ProjectsComponent.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsComponent = () => {

    const navigateToFoApp = () =>{
        window.open("https://github.com/bujakkristijan/food-ordering-app");
    }

    const navigateToCinemaApp = () =>{
        window.open("https://github.com/bujakkristijan/cinema-react-java-spring-boot");
    }

    const navigateToCourseApp = () =>{
        window.open("https://github.com/bujakkristijan/react-responsive-course-website");
    }

    const navigateToTopicsApp = () =>{
        window.open("https://github.com/bujakkristijan/challenge");
    }

    const navigateToGroceryApp = () =>{
        window.open("https://github.com/bujakkristijan/codetribetest");
    }

    const navigateToPortfolioApp = () =>{
        window.open("https://github.com/bujakkristijan/portfolio");
    }
    const navigateToInternFigmaApp = () =>{
        window.open("https://github.com/bujakkristijan/internship-studio-present-react");
    }

  return (
    <div id='projects' className='projects-main-container'>
        <p className='projects-small-title'>Browse My Recent</p>
        <div className='projects-big-title'>Projects</div>
        <div className='projects-container'>
            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/foappnew.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Food Ordering Application
                    </div>
                    <div className='project-description'>
                    This is my Bachelor project as a student. Users can order food from the restaurant's menu. 
                    They can track the status of their orders, which can be updated by employees. 
                    Users add items to the cart and proceed to place their final order.
                    </div>
                    {/* <br></br>  ne treba ovako ali radi ovaj nacin, da dugme bude u istoj liniji sa box-containerom pored */}
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project' onClick={navigateToFoApp}>
                        Github source code
                        <FontAwesomeIcon className='btn-github-icon' icon={faGithub}/>
                    </div>
                </div> 
            </div>

            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/cinemaapp.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Cinema Application
                    </div>
                    <div className='project-description'>
                    Responsive cinema application that allows users to see movie projections by selected day. Registered users can reserve a ticket by selecting available seat (row and column) in the hall where the movie projection is being shown.
                    </div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project' onClick={navigateToCinemaApp}>
                        Github source code
                        <FontAwesomeIcon className='btn-github-icon' icon={faGithub}/>
                    </div>
                </div> 
            </div>

            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/alasapp.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Topics Application
                    </div>
                    <div className='project-description'>
                        This is an entry task for a junior position at a certain company. The task
                        involves loading topics from a JSON file and manipulating the font size and
                        color of each topic based on its metadata. Technologies used: JavaScript/React.
                    </div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project'onClick={navigateToTopicsApp}>
                        Github source code
                        <FontAwesomeIcon className='btn-github-icon' icon={faGithub}/>
                    </div>
                </div> 
            </div>

            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/intern.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Figma to React App
                    </div>
                    <div className='project-description'>
                    Design from Figma has been transformed into a fully responsive web application with necessary functionalities.
                    Features: Image slider, Hamburger menu, Dark/Light mode, Popup message, and more.</div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project' onClick={navigateToInternFigmaApp}>
                        Github source code
                        <FontAwesomeIcon className='btn-github-icon' icon={faGithub}/>
                    </div>
                </div> 
            </div>

            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/groceryapp.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Grocery List Application
                    </div>
                    <div className='project-description'>
                        Grocery list that accepts an item and also saves it in local storage. Focus is on solving logical problems from specification using JavaScript and ReactJS library. </div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project' onClick={navigateToGroceryApp}>
                        Github source code
                        <FontAwesomeIcon className='btn-github-icon' icon={faGithub}/>
                    </div>
                </div> 
            </div>

            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/portfolio.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Portfolio Application
                    </div>
                    <div className='project-description'>
                        This is my responsive portfolio website that you are currently browsing! You can download my CV, find out more info about me or send me an email via contact form. (ReactJS with focus on CSS styling.) </div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project' onClick={navigateToPortfolioApp}>
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