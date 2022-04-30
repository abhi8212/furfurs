import React from 'react'
import { FaInstagramSquare, FaFacebookSquare,FaTwitterSquare,FaLinkedinIn} from 'react-icons/fa';
 import '../Footers.css'

const Footers = () => {
  return (
    <>
         <footer>
        <div className="row primary">
          <div className="column about">
          <div className="img"><img src="logo_furfurs.png" alt="logo"/></div>
           <div className="social">
            {/* <i className="fa fa-instagram"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i> */}
            <a href='#'><FaInstagramSquare/></a>
            <a href='#'><FaFacebookSquare/></a>
            <a href='#'><FaTwitterSquare/></a>
            <a href='#'><FaLinkedinIn/></a>
          </div>
        </div>
        
        <div className="column links">
        <h3>What We Do</h3>
        
         <ul id=".ul-footer">
          <li id=".li-footer"> <a href="#faq">Dog Walking</a> </li>
          <li id=".li-footer"> <a href="#cookies-policy">Grooming</a></li>
          <li id=".li-footer"> <a href="#terms-of-services">Dog Training</a> </li>
           <li id=".li-footer"> <a href="#support">Boarding</a>  </li>
           <li id=".li-footer"> <a href="#support">Pet Sitting</a>  </li>
           <li id=".li-footer"> <a href="#support">Vet Consultation</a>  </li>
         </ul>
        
        </div>
        
        
        <div className="column links">
          <h3>Company</h3> <ul> 
              <li> <a href="#faq">About Us</a> </li>
            <li>
             <a href="#cookies-policy">Mission and Vision</a>
            </li>
            <li>
            <a href="#terms-of-services">Our Story</a>
            </li>
          </ul>

          <h3>Contact</h3> <ul> 
            <li> <a href="#faq">Email id</a> </li>
          <li>
           <a href="#cookies-policy">Phone number</a>
          </li>
        </ul>
        </div>

        <div className="column links">
            <h3>Support</h3>
             <ul>
              <li>
               <a href="#faq">FAQS</a>
              </li>
              <li>
               <a href="#cookies-policy">return Policy</a>
              </li>
              <li>
              <a href="#terms-of-services">Terms and Condition</a>
              </li>
            </ul>
          </div>
        
        </div>
        
        <div className="row copyright">
           <p>Copyright &copy; 2022 forfurspectcare.com</p>
           <p>Powered by forfurspectcare.com</p>
        </div>
        </footer>
    </>
  )
}

export default Footers