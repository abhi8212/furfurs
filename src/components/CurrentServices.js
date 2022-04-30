import React from 'react'
import '../CurrentServices.css'

const CurrentServices = () => {
  return (
    <>
          <div class="row-curr">
        <h2>Current Services
        <img src='foot-curr-head.png'></img>
        </h2>
        <div className="foot-curr"><img src='foot-left.png'></img></div>
        <div class="column-current">
            <div class="img-services"><img src="curr.services.png" alt=""/></div>
          <div class="card-current">
              <div class="date-div">
                <label for="services">Services Start:
                <input type="date" name="dateofbirth" id="dateofbirth"/></label>
                <label for="date">Services End:
                <input type="date" name="dateofbirth" id="dateofbirth"/></label>
                <label for="dateofbirth">Number of shifts:
                    <input type="text" name="" id="shifts"/></label>
                  <div class="btn_query">
                    <button class="login-button dash-btn" href="#">Raise Query</button>
                    <button class="join-button dash-btn" href="#">Request Refund</button>
                  </div>
              </div>  
          </div>
        </div>
        <div className="foot-curr-b"><img src='foot-left.png'></img></div>
      </div>
    </>
  )
}

export default CurrentServices