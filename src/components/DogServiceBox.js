import React from 'react'
import "../Dog.css"
const Dog = () => {
  return (
    <>
    {/* -------------dog image on the right top corner--------- */}
<div id="dog-image-on-top" >
    <img src="https://s3-alpha-sig.figma.com/img/b01a/26be/ae5000910bfce0d2ec20af1a6f4d5001?Expires=1652054400&Signature=eMILt3fWcqZpOrWLOhxAbs4Z4jZUrdsgTFzHbCDwGBGVuEA3poeyw2Fbe~5r6m6ue5w9KIL1PWpP5EpzBIs9mshqirRsE69S-01lzWsRY1vwf8Mw7rqacqdhF0SrOkedaFatf5f2Bx21p-LReOj4bLHYY91PPcx1IghgJpJ4Pg9sJCSsIIRtmK9HjkpscNIWSjcIjDtl8578RIFm0Yd9J~AYlTqlLWMvwPC78rZrIgHjpTkHqwewwKMK42s0Z-asnYgChzRLmzDLj6ScdjjjWXU-sGEnJzZLaokvThdo4Xq1OvFjY1ggMVep~H4WT4Ny3fP7Qikw7rHQZytmAV~9SA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""  style={{width:"50px"}}/>
</div>
    <div id="dog-things">
    <div className="dog-content">
        <div className="dog-items">
            <h4>
                Dog walking
            </h4>
            <ul style={{margin:"20px 0px",fontWeight:"500"}}>
                <li>Professional walker</li>
                <li>Gps live tracking</li>
                <li>No offs taken</li>
                <li>100% refund</li>
            </ul>
            <button id="book-now-btn">Book Now</button>
        </div>
        <div className="dog-items" >
            <div id='dog-image'>
            <img src="https://citydogexpert.com/wp-content/uploads/2021/06/bundo-kim-NIKl5WwL-RE-unsplash-1.jpg" id='dog-bg' alt="" />
          
            </div>
                <a href="#" style={{color:"black",float:"right",fontWeight:"500"}}>Know more &rarr;</a>
        </div>
        
    </div>

    </div>
    </>
  )
}

export default Dog