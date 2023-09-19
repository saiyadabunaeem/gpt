import React from 'react';
import './Footer.css';
import logo from '../../Assets/logo.svg';


const Footer = () => {
  return (
    <div className='footer sectionPad' id='footer'>
      <div className="footerHead">
        <h1 className='gradientTxt'>Do You Want to Step Into The Future Before Others</h1>
      </div>
      <div className="footerBtn">
        <button>Request Early Access</button>
      </div>
      <div className="footerCon">
        <div className="footerConLogo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK alknjkcb, All Rights Resereved</p>
        </div>
        <div className="footerLinks">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Overons</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footerLinks">
          <h4>Company</h4>
          <p>Terms And Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footerLinks">
          <h4>Get In Touch</h4>
          <p>Crechterwoord K12 182 Media</p>
          <p>info.payme.net</p>
         
          
        </div>
      </div>
      <div className="footerLast">
        <p>Copywright 2023 GPT. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer