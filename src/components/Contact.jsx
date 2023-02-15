import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import mayflower from '../assets/images/mayflower.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y26f3sj',
        'template_sjccs6m',
        form.current,
        'VQqcVuOjBaHiXJ7jV'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          });
        }
      );
    e.target.reset();
  };
  return (
    <div id='big-contact-container'>
      <header id='header-contact'>
        <span id='portfolioMe'>
          Contact <span id='me'>Me</span>
        </span>
        <div className='contact-desc'>
          Have a question or want to work together?
        </div>
      </header>

      <div className='contact-container'>
        <div>
          <img
            id='mayflower'
            src={mayflower}
            alt='mayflower'
          />
        </div>
        <div className='contact-content'>
          <form
            className='contact-form'
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              id='input-area'
              type='text'
              name='user_name'
              placeholder='Name'
            />

            <input
              id='input-area'
              type='email'
              name='user_email'
              placeholder='Email'
            />

            <textarea
              id='message-area'
              name='message'
              placeholder='Message'
            />
            <input
              className='button'
              type='submit'
              value='Send'
            />
          </form>
          <div className='contact-desc'>Visit My Socials:</div>
          <div>
            <a
              href='https://www.linkedin.com/in/meganmiller485/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                className='social'
                id='linkedin'
                icon={faLinkedin}
                color='black'
              />
            </a>
            <a
              href='https://github.com/meganmiller485'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                className='social'
                id='github'
                icon={faGithub}
                color='black'
              />
            </a>
            <a
              href='https://mail.google.com/mail/u/0/#inbox?compose=new'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                className='social'
                id='email'
                icon={faEnvelope}
                color='black'
              />
            </a>

            <a
              href='https://www.instagram.com/lilmillerrr/?hl=en'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                className='social'
                id='instagram'
                icon={faInstagram}
                color='black'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
