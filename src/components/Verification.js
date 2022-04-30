import React from 'react'
import '../Verification.css'
const Verification = () => {
  return (
    <>
  <div className="card">
      <h1 className="title">Verification</h1>
      <p style={{textAlign:"center",marginTop:"20px"}}>Welcome back !!!</p>
      <div className="email-login">
         <label for="number"> <b>Phone Number</b></label>
         <input type="text" placeholder="Enter Phone Number" name="uname" className='user-input'  />
         <label for="otp"><b>Otp</b></label>
         <input type="password" placeholder="Enter otp" name="otp" className="user-input"  />
      </div>
<span>Resend</span>
      <button className="cta-btn">Send</button>

</div>
    </>
  )
}

export default Verification