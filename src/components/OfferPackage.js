import React from 'react'
import '../OfferPackage.css'

const OfferPackage = () => {
  return (
    <>
         <div className="packages-pack">
      <h2>  offers and packages</h2>
      
        <div className="back-image-pack">
            <img src="offers.png" alt=""/>
            <div className="offer-box-pack">
                <div className="contents-pack">
                    <h1 className='ho-pack'>Get 5 % discount</h1>
                    <h3 className='ht-pack'>On your first Booking</h3>
                </div>
                <div className="books-pack">
                    <a href="$">Book Now</a>
                </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default OfferPackage