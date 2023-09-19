import React from 'react';
import People from '../../Assets/people.png';
import AI from '../../Assets/ai.png';
import './Header.css';


const Header = () => {
  return (
    <div className='header sectionPad' id='home'>
      <div className='headerContent'>
      <h1 className='gradientTxt'>Let's Build Something Amazing with GPT-3 OpenAI</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel, eos quaerat excepturi eaque maxime laboriosam quisquam rerum optio dicta laborum, molestiae error sed aperiam debitis nostrum harum assumenda voluptates?</p>
      <div className='headerInput'>
      <input type='email' placeholder='Your Email'/>
      <button type='button'>Get Started</button>



      </div>
      <div className='headerPeople'>
      <img src={People} alt='people'/>
      <p>1000+ People has Access</p>




      </div>
      

      </div>
      <div className='headerImg'><img src={AI} alt='AI'/></div>
      
      
    </div>
  )
}

export default Header