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
                        Food Ordering Application
                    </div>
                    <div className='project-description'>
                        This is my Bachelor project as a student. The main purpose of the application is to allow the user to view the offer and order food from the restaurant, then track status of the order. User add items to cart then makes final order.
                    </div>
                    {/* <br></br>  ne treba ovako ali radi ovaj nacin, da dugme bude u istoj liniji sa box-containerom pored */}
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project'>
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
                    <div className='btn-project'>
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
                        Entry task for junior position in one company. Loading topics from json file then manipulating topic font size and color depending on topic metadata. Focus on JavaScript and state managment in React.
                    </div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project'>
                        Github source code
                        <FontAwesomeIcon className='btn-github-icon' icon={faGithub}/>
                    </div>
                </div> 
            </div>

            <div className='project-box-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={require('../../images/courseapp.png')} alt=''></img>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        Course Application
                    </div>
                    <div className='project-description'>
                        Small responsive course project implemented using ReactJS library with focus on styling in CSS. Logical problems and functionality in this project aren't implemented.                    </div>
                    {/* stavio sam div umesto button jer na button ne radi margin: auto da centrira dugme */}
                    <div className='btn-project'>
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