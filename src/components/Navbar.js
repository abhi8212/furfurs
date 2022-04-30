import React from 'react'
 import '../Navbar.css'



const Navbar = () => {


  return (
    <>
         <nav>
        <div className="logo">
            <img src= "logo_furfurs.png" alt="logo"/>
        </div>
        <div className="hamburger">
             <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        {/* <ul className={HumBurger ? "nav-links mob-nav-links":"nav-links"}> */}
        <ul className= "nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><button className="login-button" href="#">Login</button></li>
            <li><button className="join-button" href="#">Register</button></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar