import React from 'react';
//  import { Routes, Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
  import SignUp from './components/SignUp';
   import Login from './components/Login';
   import Navbar from './components/Navbar';
   import   Verification from './components/Verification';
     import Footers from './components/Footers';
    import Accordian from './components/Accordian';
    import drop from './components/EmailDrop';
import EmailDrop from './components/EmailDrop';
import Dashboard from './components/Dashboard';
import CurrentServices from './components/CurrentServices';
import WhyChoose from './components/WhyChoose';


const App = () => {
  return (
    <>
  
    <Router>
    <Navbar/>
           <div className="App">
           <Routes>
           <Route exact path='/' element={< Dashboard />}></Route>
                 <Route exact path='/signup' element={< SignUp />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/very' element={< Verification/>}></Route>
                 <Route exact path='/accordian' element={<Accordian/>}></Route>
                 <Route exact path='/drop' element={<EmailDrop/>}></Route>
                 <Route exact path='/c' element={<CurrentServices/>}></Route>
                 <Route exact path='/why' element={<WhyChoose/>}></Route>
                 
                 
          </Routes>
          </div>
          <Footers/> 
       </Router>
    
    </>
  )
}

export default App 