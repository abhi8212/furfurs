import React from 'react'
import '../Card.css'
function Card({content}) {
  return (
    <div className='card-cont'>
        <div className='inner-cont'>
            {content}
        </div>
    </div>
  )
}

export default Card