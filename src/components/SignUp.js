import React from 'react'
import { Link } from 'react-router-dom'
import "../SignUp.css"
const SignUp = () => {
  return (
    <>
 <div className="card">

   {/* <form> */}
      <h1 className="title"> Sign Up</h1>
      <p style={{textAlign:"center",margin:"20px 0px"}}>Create an account to enjoy all the services without any ads for free!</p>
      {/* <p className="subtitle">Don't have an account? <NavLink to="#"> sign Up</NavLink></p> */}

      <div className="social-login">
         <button className="google-btn">
            <img alt="Google" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
            <p className="btn-text">Sign up with Google</p>
         </button>
         <button className="fb-btn">
         <img alt="FB" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI5MS4zMTkgMjkxLjMxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkxLjMxOSAyOTEuMzE5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojM0I1OTk4OyIgZD0iTTE0NS42NTksMGM4MC40NSwwLDE0NS42Niw2NS4yMTksMTQ1LjY2LDE0NS42NmMwLDgwLjQ1LTY1LjIxLDE0NS42NTktMTQ1LjY2LDE0NS42NTkNCgkJUzAsMjI2LjEwOSwwLDE0NS42NkMwLDY1LjIxOSw2NS4yMSwwLDE0NS42NTksMHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE2My4zOTQsMTAwLjI3N2gxOC43NzJ2LTI3LjczaC0yMi4wNjd2MC4xYy0yNi43MzgsMC45NDctMzIuMjE4LDE1Ljk3Ny0zMi43MDEsMzEuNzYzaC0wLjA1NQ0KCQl2MTMuODQ3aC0xOC4yMDd2MjcuMTU2aDE4LjIwN3Y3Mi43OTNoMjcuNDM5di03Mi43OTNoMjIuNDc3bDQuMzQyLTI3LjE1NmgtMjYuODF2LTguMzY2DQoJCUMxNTQuNzkxLDEwNC41NTYsMTU4LjM0MSwxMDAuMjc3LDE2My4zOTQsMTAwLjI3N3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
         </button>        
      </div>

      <p className="or"><span>or</span></p>

      <div className="email-login">
         <label for="name"> <b>Name</b></label>
         <input type="text" placeholder="Enter Name " name="name" className='user-input'  />
         <label for="email"> <b>Email</b></label>
         <input type="text" placeholder="Enter Email" name="email" className='user-input'  />
         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="psw" className="user-input"  />
         <label for="cpsw"><b>Confirm Password</b></label>
         <input type="password" placeholder="Enter Password Again" name="cpsw" className="user-input"  />
      </div>
      
      <button className="cta-btn">Create Account</button>
      {/* <NavLink className="forget-pass" to="#">Forgot password?</NavLink> */}
      <p className="subtitle">Already have an account? <Link to={"/e"}> Sign in</Link></p>
   {/* </form> */}
</div>


<svg width="70" height="126" viewBox="0 0 123 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ii_1_6754)">
<path d="M77.6775 0.659604C74.0232 -0.202126 70.6029 0.293626 67.7877 2.09656L67.7508 2.12149C66.482 2.95123 65.3819 4.01694 64.5077 5.26322L64.4113 5.40021C60.398 11.2949 61.1585 20.8455 66.3063 29.1638C70.0663 35.2531 75.6101 39.6696 81.1372 40.9776C84.7921 41.843 88.2155 41.343 91.0381 39.5293L91.0684 39.5093C92.3369 38.6792 93.437 37.6135 94.3115 36.3676C98.4516 30.4809 97.7348 20.8682 92.5299 12.4244C88.7568 6.36752 83.2082 1.96704 77.6775 0.659604ZM92.6762 46.7804C88.2937 48.6763 84.1498 50.4673 79.2617 50.051C65.7447 48.8794 57.5846 48.1738 51.2059 57.2435C44.8272 66.3132 48.1156 73.9458 53.5663 86.5868C55.535 91.1632 55.2053 95.7378 54.8586 100.585C54.459 106.14 54.0461 111.88 57.5512 117.037C58.7805 118.945 60.3564 120.601 62.1937 121.918C69.8763 127.504 80.3424 126.056 85.5212 118.692C88.1934 114.893 89.723 109.894 91.3413 104.603C92.897 99.5158 94.5057 94.2569 97.0921 90.5794C99.6785 86.9018 104.045 83.6646 108.266 80.5382C112.652 77.2731 116.796 74.2046 119.476 70.3943C124.647 63.0413 122.604 52.5128 114.922 46.9261C113.097 45.5897 111.04 44.6161 108.864 44.0578C102.928 42.3487 97.7159 44.6021 92.6762 46.7804ZM27.7363 74.4715C32.7184 74.2443 36.7482 72.2894 39.0847 68.9672C39.4037 68.5137 39.6887 68.0364 39.9373 67.5392C43.7933 59.8703 38.3886 49.4143 27.6172 43.7233C23.0907 41.3278 18.1492 40.1286 13.7155 40.3339C8.74282 40.5614 4.71205 42.5221 2.37706 45.8422C2.05811 46.2957 1.77315 46.7731 1.52454 47.2702C-2.33146 54.9391 3.07324 65.3951 13.8446 71.0861C18.3632 73.4791 23.3004 74.6752 27.7363 74.4715ZM57.1463 43.07C57.5287 42.67 57.8807 42.2415 58.1997 41.788C60.5377 38.4637 61.0529 33.9561 59.6538 29.0886C58.408 24.7564 55.6929 20.4008 52.0071 16.8145C43.2332 8.29243 31.7555 6.4716 25.8607 12.6579C25.4784 13.0578 25.1263 13.4863 24.8073 13.9399C22.4766 17.263 21.9549 21.7755 23.3505 26.634C24.5927 30.9668 27.306 35.3341 31.0043 38.9164C39.7781 47.4385 51.2559 49.2594 57.1463 43.07ZM47.5873 101.334L47.5977 101.296C48.3701 97.9983 47.7295 94.5462 45.7433 91.3126C42.7308 86.4107 36.8366 82.5063 29.9573 80.8523C20.4358 78.5646 11.2576 80.9784 7.12203 86.8586C6.24448 88.1025 5.60827 89.5057 5.24657 90.9949L5.23618 91.0327C4.45976 94.3182 5.10892 97.7765 7.09513 101.01C10.1076 105.912 16.0018 109.816 22.8811 111.47C32.4026 113.758 41.5808 111.344 45.7164 105.464C46.5916 104.222 47.2262 102.821 47.5873 101.334Z" fill="#FFDE59" fill-opacity="0.6"/>
</g>
<defs>
<filter id="filter0_ii_1_6754" x="0.282715" y="-3.75229" width="126.051" height="129.071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_6754"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1_6754" result="effect2_innerShadow_1_6754"/>
</filter>
</defs>
</svg>

<div className='svg-signup'>
<div className="img"><img src="vector-preview.png" alt="logo"/></div>
</div>
    </>
  )
}

export default SignUp