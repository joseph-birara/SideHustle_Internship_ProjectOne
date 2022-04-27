import React from 'react'
import './style.css'
export default function Form() {
  return (
      <>
     <div className='contact'>
     <div>
         <h2>Contact form</h2>
         </div>
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" placeholder='Your Name' required /><br />
            <label for="email">E-mail:</label><br />
            <input type="text" id="email" name="email" placeholder='Your Email' required/><br />
            <label for="phone">Phone:</label><br />
            <input type="text" id="phone" name="phone" placeholder='Your phone' /><br />
            <label for="message">Message:</label><br />
            <textarea type="text" id="message" name="message" placeholder='Your Message' required />
            <a href='#'><i class="fa-solid fa-paper-plane"></i>Send</a>
     </div>
    </>
  )
}
