import React from 'react'
import CostCard from './CostCard'
import Giffy from './Giffy'
import ServicesHeader4 from './ServicesHeader4'
import TCard from './TCard'

function DogGrooming() {
  return (
    <div><ServicesHeader4/><div style = {{"marginTop" : "45vw"}}></div>
    <h1>Dog Grooming
    <img style = {{marginLeft : "13px","marginTop":"4px"}}  src = "https://res.cloudinary.com/sidd293/image/upload/v1651251313/Vector_fbubyq.png"></img>

    </h1>
<div className='g-card-container'>
<CostCard/>
<CostCard/>
<CostCard/>

</div>
<br/>
<br/>
<br/>
    <h1>Cat Grooming
    <img style = {{marginLeft : "13px","marginTop":"4px"}}  src = "https://res.cloudinary.com/sidd293/image/upload/v1651251313/Vector_fbubyq.png"></img>
      </h1>
      
<div className='g-card-container'>
  <CostCard/>
  <CostCard/>
  <CostCard/>

</div>
      
      <Giffy/>
      <TCard/>
      </div>
  )
}

export default DogGrooming