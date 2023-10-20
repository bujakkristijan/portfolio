import React from 'react';
import './NavbarComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars  } from '@fortawesome/free-solid-svg-icons'

// za Link mora i Browser Router u app componenti da se wrapuje okolo
const NavbarComponent = () => {
  
    // const scrollToComponent = (id) => {
    //     const component = document.getElementById(id);
    //     component.scrollIntoView({ behavior: 'smooth' });
    // }

    let isDarkModeEnabled = false;

    const hideMenu = () =>{
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "-200px";
        navLinks.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)"; /* da vrati normalno */
    }

    const showMenu = () =>{
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "0"; // po defaultu u css-u za male ekrane je stavljeno da je -200, ukoliko stisne dugme, postaje right: 0, pa se pojavi  meni
        navLinks.style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)"; /* da zatamni pozadinu */
    }

    const enableDarkMode = () =>{
        /* iz body svi nasledjuju 'dark-mode' izgleda, dovoljno je na njega da se dodeli samo */
        // const body = document.body;
        document.body.classList.add('dark-mode');
      }

      const disableDarkMode = () => {
        // const body = document.body;
        document.body.classList.remove('dark-mode');
      }

      const toggleSwitchMode = () =>{
        const darkModeToggle = document.getElementById('swith-toggle-mode');
            if (darkModeToggle.checked) {
                enableDarkMode();
                isDarkModeEnabled = true;
            } else {
                disableDarkMode();
                isDarkModeEnabled = false;
            }
      }

  return (
    <>
    <div className='navbar'>
        <div className='logo'>Portfolio</div>
        <div class="switch-container">
            <label class="switch-toggle">
                <input class="switch-toggle-input" type="checkbox" id="swith-toggle-mode" onChange={toggleSwitchMode} />
                <span class="slider-toggle"></span>
              </label>
        </div>
        <div className='nav-links' id="navLinks">
            <FontAwesomeIcon className='x-icon' icon={faX} onClick={hideMenu}/>
            <ul className='nav-ul'>
                {/* <li><a href='#about' onClick = {() => scrollToComponent('about')}>About</a></li> */}
                <li><a href='#about' onClick={hideMenu} >Experience</a></li>
                <li><a href='#experience' onClick={hideMenu} >Skills</a></li>
                {/* <li><a href='#projects' onClick = {() => scrollToComponent('projects')}>Projects</a></li> */}
                <li><a href='#projects' onClick={hideMenu} >Projects</a></li>
                <li><a href='#contact' onClick={hideMenu} >Contact</a></li>
            </ul>
        </div>
        <FontAwesomeIcon className='bars-icon' icon={faBars} onClick={showMenu}/>
    </div>  
    </>
  )
}

export default NavbarComponent