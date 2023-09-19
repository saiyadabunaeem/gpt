import React from 'react'; 
import './Poss.css';
import PossImg from '../../Assets/assets/possibility.png';

const Poss = () => {
  return (
    <div className='poss sectionPad'>
      <div className="possImg">
      <img src={PossImg} alt="PossImg"/>

      </div>
      <div className="possCon">
      <h4>Request Early Access to Get Started.</h4>
      <h1 className="gradientTxt">The Possibilities Are Beyond Your Imagination.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi mollitia iste. Animi aut.</p>
      <h4>Request Early Access to Get Started</h4>

      </div>



    </div>
  )
}

export default Poss