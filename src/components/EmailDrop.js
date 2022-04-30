import React from 'react'
import '../Drop.css';

const EmailDrop = () => {
  return (
    <>
        <div className='email-sec'>
            <h1>Drop Your Email To Get Discount Coupon</h1>
            <div className='block'>
            <input type="text" class="input-res" placeholder='Enter you Email'/>
            <a href="something" class="button-email">Submit</a>
            </div>
            <img src='foot.png' alt='foot'></img>
            
        </div>
    </>
  )
}

export default EmailDrop