import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars  } from '@fortawesome/free-solid-svg-icons'
// import { faX } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NavbarComponent from './components/navbar/NavbarComponent';
import ProfileComponent from './components/profile/ProfileComponent';

function App() {
  return (
    <>
    
   <div className='main-container'>
      {/* <AboutComponent/> */}
      <NavbarComponent/>
      <ProfileComponent/>
   </div>
    
    </>
    
  );
}

export default App;
