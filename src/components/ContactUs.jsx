// src/components/ContactUs.jsx
import React from 'react';
import './styles/contactUs.scss'
import contactUsImg from '../assets/images/contactUsImg.jpg'
import ActionButton from './ActionButton';
import locationIcon from '../assets/icons/locationIcon.svg'
import emailIcon from '../assets/icons/emailIcon.svg'


const ContactUs = () => {
  return (
    <section id="contact" className="my-5">
      <section className='contact-container'>
          <h2 className='contactTitle'>Entre em contato com a gente!</h2>
          <div className='contact-text'> <img src={locationIcon} alt="" /> <p>R. Lorem Ipsum, 346</p></div>
          <div className='contact-text'> <img src={emailIcon} alt="" /> <p>contato@LoremIpsum.com</p></div>
          <ActionButton centered/>
      </section>
      <img src={contactUsImg} alt="" className='contactUsImg'/>
    </section>
  );
}

export default ContactUs;
