import React from 'react';
import './WhatGPT.css'
import Feature from '../../Components/Feature/Feature'

const WhatGPT = () => {
  return (
    <div className='whatgpt sectionMar gradient' id='wgpt'>
    <div className="whatgptFeature">
    <Feature title= 'What is GPT' text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel, eos quaerat excepturi eaque maxime laboriosam quisquam' />
    </div>
    <div className="whatgptHeading">
    <h1 className="gradientTxt">The Possibilities are Beyond Your Imagination</h1>
    <p>Explore The Library</p>

    </div>
    <div className="whatgptCon"> 
    <Feature title= 'ChatBot' text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel, eos quaerat excepturi eaque maxime '/>
    <Feature title= 'Knowledge' text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel' />
    <Feature title= 'Education' text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel' />
</div>
   
    
    </div>
  )
}

export default WhatGPT