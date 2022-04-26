import React from 'react'
import './About.css'
import Coffee from '../../Images/coffee.png'
import Bulb from '../../Images/bulb2.png'
import Heart from '../../Images/heart.png'
import Menu from '../../Images/menu3.png'
import Thumb from '../../Images/thumb.png'
import Cuisine from '../../Images/cuisine.png'

function Offer() {
    const ourOffers=[
        { id:1, headd: "Daily Fresh Menus" , pict:Menu},
        { id:2, headd: "Fresh Ingredients" , pict:Heart},
        { id:3,  headd: "Tasty Meals" , pict:Thumb},
        { id:4,  headd: "Creative Chefs" , pict:Bulb},
        { id:5, headd: "Authentic Cusine" , pict:Cuisine},
        { id:6, headd: "Home Roasted Coffee" , pict:Coffee}

    ]
  return (
    <div>
        <h2 className='oTop'>What We Offer</h2>
        <div className='card'>
         {
           ourOffers && ourOffers.map((ourOffer) =>
               <div className='card-box'>
                <div className='cardpic'> <img src={ourOffer.pict} alt=""/> </div>
                 <b>{ourOffer.headd}</b>
                 <p>i will.Sed ut perspiciatis perspiciatis perspiciatis Sed ut perspiciatis
                 Sed ut perspiciatis unde omnis iste natus erro</p>
                  </div>
           )
         }
        </div>
    </div>
  )
}

export default Offer