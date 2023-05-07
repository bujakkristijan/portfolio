import React from 'react';
import './NavbarComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars  } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


// za Link mora i Browser Router u app componenti da se wrapuje okolo
const NavbarComponent = () => {

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

  return (
    <>
    <div className='navbar'>
        <div className='logo'>Kristijan Bujak</div>
        <div className='nav-links' id="navLinks">
            <FontAwesomeIcon className='x-icon' icon={faX} onClick={hideMenu}/>
            <ul className='nav-ul'>
                <li><a href='#about' onClick={hideMenu}>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        <FontAwesomeIcon className='bars-icon' icon={faBars} onClick={showMenu}/>
    </div>  
    </>
  )
}

export default NavbarComponent