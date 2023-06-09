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
import FooterComponent from './components/footer/FooterComponent';

function App() {

  //npm run deploy i pushovao na main, pa se vide izmene na github pages, nzm do cega je tacno. 

  return (
    <>
   <div className='main-container'>
      <NavbarComponent/>
      <ProfileComponent/>
      <ExperienceComponent/>
      <AboutComponent/>
      <ProjectsComponent/>
      <ContactComponent/> 
      <FooterComponent/> 
   </div>  
    </>
  );
}

export default App;
