import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id='big-contact-container'>
      <header id='header-contact'>
        <span id='portfolioMe'>
          Contact <span id='me'>Me</span>
        </span>
        <div className='contact-desc'>
          Send me an email, and let's get in touch!
        </div>
      </header>
      <div className='contact-container'>
        <form
          className='contact-form'
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            id='input-area'
            type='text'
            name='user_name'
          />
          <label>Email</label>
          <input
            id='input-area'
            type='email'
            name='user_email'
          />
          <label>Message</label>
          <textarea
            id='message-area'
            name='message'
          />
          <input
            className='button'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
