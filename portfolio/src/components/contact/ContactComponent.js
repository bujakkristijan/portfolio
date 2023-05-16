import React, {useState} from 'react'
import './ContactComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";

const ContactComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName.trim() === '' || lastName.trim() === ''
            || email.trim() === '' || message.trim() === ''){
                alertFail();
            }
        else{
            emailjs.send('service_7pzrivs', 'template_4a0ren5', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                message: message
              }, 'hwJzqXuIXuVVkvdSp')
                .then((result) => {
                  console.log(result.text);
                  //nakon uspesnog slanja mail-a,prikazuje se alert koji traje 1500ms,
                  //a takodje se postavlja i timer u kom se posle 1500ms setuju prazna polja u inpute, pa ce se inputi isprazniti odmah nakon alerta
                  alertSuccess();
                  setTimeout(() => {
                        setFirstName('');
                        setLastName('');
                        setEmail('');
                        setMessage('');
                  }, 1500);
                }, (error) => {
                  console.log(error.text);
                });
        }
      }

      const alertSuccess = () =>{
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Email successfully sent!',
              showConfirmButton: false,
              timer: 1500
            });
      }

      const alertFail = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All input fields are required!',
          })
      }

  return (
    <div id='contact' className='contact-main-container'>
        <p className='contact-small-title'>Get In Touch</p>
        <div className='contact-big-title'>Contact me</div>
        <div className='contact-text'>Be free to write me a message if you want to hire me</div>
        <div className='contact-container'>
            <div className='contact-sub-container'>
                <div className='name-container'>
                    <div className='first-name-container'>
                        <label className='label-name'>First name: </label>
                        <input className='input-name' 
                            type='text' 
                            placeholder='Insert your name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            >
                            </input>
                    </div>
                    <div className='last-name-container'>
                        <label className='label-last-name'>Last name: </label>
                        <input className='input-last-name' 
                            type='text' 
                            placeholder='Insert your last name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            >
                        </input>
                    </div>
                </div>
                <div className='email-container'>
                    <label className='label-email'>Email: </label>
                    <input className='input-email' 
                        type='text' placeholder='Insert your email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        >
                    </input>
                </div>
                <div className='message-container'>
                    <label className='label-message'>Message: </label>
                    <textarea className='textarea-message' 
                        rows = '8' placeholder='Insert your message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        >
                    </textarea>
                </div>
                <div className='button-email-container'>
                    <div className='btn-send-email' onClick={handleSubmit}>
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