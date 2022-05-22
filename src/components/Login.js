// import { textAlign } from '@mui/system';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Login.css"
import {  signInWithPopup } from "firebase/auth";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect,useState} from 'react';
import { auth,provider } from "./firebase";
const Login = () => {
   useEffect(() => {
 
   }, []);
   const [mail,setMail] = useState("")
    const [name,setName] = useState("")
    const [profilePic,setProfilePic] = useState("");
    const [logged,setLogged] = useState(false)
    const [loading , setLoading] = useState(false)
    // const [f,setF] = useState("\\(\\sqrt{10} \\over{2}{2}\\)")
  
    useEffect(() => {
      if(localStorage.getItem('logged') !== null && JSON.parse(localStorage.getItem("logged"))  == true)
     {
      //  window.location.reload();
       console.log("user was logged in")
       setMail(localStorage.getItem("logged"));
       setName(localStorage.getItem("name"));
       setMail(localStorage.getItem("email"));
       setLogged(true);     
       
  
     }
  
    
      return () => {
        
      }
    }, [])
  
    useEffect(() => {
      
    // if(logged === true) window.location.href = "/HOME"
      return () => {
        
      }
    }, [logged])
    
    const login=()=>{
      setLoading(true);
      signInWithPopup(auth, provider)
    .then((result)=>{
            setLoading(false);
            
          localStorage.setItem("name",result.user.displayName)
            console.log("logged in")
            window.location.reload();

          
          }).catch(()=>{
            console.log("cant login in")
      setLoading(false);
      }
      );
  
  
  
   }

  return (
    <>
  <div className="card">
   {/* <form> */}
      <h1 className="title"> Sign in</h1>
      <p style={{textAlign:"center",marginTop:"20px"}}>Welcome back !!!</p>
      {/* <p className="subtitle">Don't have an account? <NavLink to="#"> sign Up</NavLink></p> */}

      <div className="social-login">
         {/* <button className="google-btn">
            <img alt="Google" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
            <p className="btn-text">Sign in with Google</p>
         </button> */}

         {loading? <CircularProgress/> : <button className="google-btn" onClick={login} > <img alt="Google" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
            <p className="btn-text">Sign in with Google</p></button>
}



         <a href='/register/phone'>
         <button className="fb-btn">
         <img alt="FB" src="data:image/png;base64,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" />
         </button> 
         </a>       
      </div>

      <p className="or"><span>or</span></p>
      <div className="email-login">
         <label for="email"> <b>Email</b></label>
         <input type="text" placeholder="Enter Email" name="uname" className='user-input' required/>
         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="psw" className="user-input" required/>
      </div>
      <NavLink className="forget-pass" to="#">Forgot password?</NavLink>
      <button className="cta-btn">Log In</button>
      {/* <NavLink className="forget-pass" to="#">Forgot password?</NavLink> */}
      <p className="subtitle">Don't have an account? <NavLink to="#"> sign Up</NavLink></p>
   {/* </form> */}
</div>
    </>
  )
}
export default Login;