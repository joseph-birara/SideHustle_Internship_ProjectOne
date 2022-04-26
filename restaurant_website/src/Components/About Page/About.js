import React from 'react'
import AboutTop from '../../Images/TopImg.jpeg'
import './About.css'
import Achievements from './Achievements'
import Offer from './Offer'
import Story from './Story'

function About() {
  return (
    <div className='About-top'>
      
       <div className='innerText'>
       <h1>About Us</h1>
       <p>This is a brief about us, which talks about this resturants webpage, I have nothing to say yet but 
           soon i will.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
       </p>
       </div> 
    
       <Story/>
       <Achievements/>
       <Offer/>
    
    </div>
    
  )
}

export default About