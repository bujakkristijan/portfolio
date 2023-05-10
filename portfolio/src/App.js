import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars  } from '@fortawesome/free-solid-svg-icons'
// import { faX } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NavbarComponent from './components/navbar/NavbarComponent';
import ProfileComponent from './components/profile/ProfileComponent';
import AboutComponent from './components/about/AboutComponent';
import ExperienceComponent from './components/experience/ExperienceComponent';
import ProjectsComponent from './components/projects/ProjectsComponent';
import ContactComponent from './components/contact/ContactComponent';

function App() {
  return (
    <>
    
   <div className='main-container'>
      {/* <AboutComponent/> */}
      <NavbarComponent/>
      <ProfileComponent/>
      <AboutComponent/>
      <ExperienceComponent/>
      <ProjectsComponent/>
      <ContactComponent/>
   </div>
    
    </>
    
  );
}

export default App;
