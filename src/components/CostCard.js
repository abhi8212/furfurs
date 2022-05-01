import React from 'react'
import '../CostCard.css'
function CostCard() {
  return (
    <div className = "costCard">
    <div style={{marginTop:"-18px"}} className= "circle">
        <img style = {{marginLeft : "3px","marginTop":"4px"}}  src = "https://res.cloudinary.com/sidd293/image/upload/v1651251313/Vector_fbubyq.png"></img>
    </div>

       Spa Bath
   <img src= "https://res.cloudinary.com/sidd293/image/upload/v1651251499/Untitled-design-23-1024x1024_1_nju7rj.png"></img>
    <ul style = {{"textAlign":"left"}}>
        <li>Pawdicure
</li>
<li>Teeth Brushing/ Dental Spray</li>
<li>Bath With Shampoo

</li>
<li>Blow Dry
</li>
<li>Nail Clipping/ Grinding
</li>
<li>Ear Cleaning</li>
<li>Combing/ Brushing
</li>
<li>Perfume</li>


    </ul>
    
    </div>
  )
}

export default CostCard