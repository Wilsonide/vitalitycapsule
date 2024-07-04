import './contact.css'
import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b60ycob', 'template_h5o73jb', form.current, {
        publicKey: 'tzF_kCZktJYuxIM04',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert("Email sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contacts'>
        <h1 className="contactHeader">Contact Me</h1>
        <p className="contactDesc">Feel free to reach out!</p>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" className="email" placeholder='Your Email' name='your_email'/>
            <textarea name="message" id="msg" rows="5" className="msg" placeholder='Your Message'></textarea>
            <button className="submitBtn" type='submit' value='send'>Submit</button>
        </form>
    </section>
  )
}

export default Contact