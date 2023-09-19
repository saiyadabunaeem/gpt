import React from 'react'
import { Feature } from '../../Components';
import './Feature.css'

const data= [
{
title: 'Improving And Distrusts Instantly' ,
text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitTemporibus vel eos quaerat excepturi eaque maxime'
}
,
{
title: 'Message the Active' ,
text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitTemporibus vel eos quaerat excepturi eaque maxime'
}
,
{
  title: 'Mesasage or Am Nothing' ,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitTemporibus vel eos quaerat excepturi eaque maxime'
  },
  {
    title: 'Really Boy The Country' ,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitTemporibus vel eos quaerat excepturi eaque maxime'
    }




]
const Features = () => {
  return (
    <div className='features sectionPad' id='features'>
        <div className="featuresHeading">
        <h1 className="gradientTxt">
          The Future is Now You Just Need To Realize it. Step into Future Today& Make it Happen.
        </h1>
        <p>Request Early Access</p> </div>
        <div className="featuresCon">
          {
            data.map(({title, text}, index)=>{
              return <Feature key={index} title={title} text={text}/>


            })





          }



       

        </div>


    </div>
  )
}

export default Features