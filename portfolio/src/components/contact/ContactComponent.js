import React from 'react'
import './ContactComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'


const ContactComponent = () => {
  return (
    <div className='contact-main-container'>
        <p className='contact-small-title'>Get In Touch</p>
        <div className='contact-big-title'>Contact Me</div>
        <div className='contact-text'>Be free to write me a message if you want to hire me</div>
        <div className='contact-container'>
            <div className='contact-sub-container'>
                <div className='name-container'>
                    <div className='first-name-container'>
                        <label className='label-name'>First name: </label>
                        <input className='input-name' type='text' placeholder='Insert your name'></input>
                    </div>
                    <div className='last-name-container'>
                        <label className='label-name'>Last name: </label>
                        <input className='input-name' type='text' placeholder='Insert your last name'></input>
                    </div>
                </div>
                <div className='email-container'>
                    <label className='label-email'>Email: </label>
                    <input className='input-email' type='text' placeholder='Insert your email'></input>
                </div>
                <div className='message-container'>
                    <label className='label-message'>Message: </label>
                    <textarea className='textarea-message' rows = '8' placeholder='Insert your message'></textarea>
                </div>
                <div className='button-email-container'>
                    <div className='btn-send-email'>
                        Send email
                        <FontAwesomeIcon className='icon-email' icon={faEnvelope} />
                    </div>  
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactComponent