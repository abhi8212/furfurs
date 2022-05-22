import React from 'react';
//  import { Routes, Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
  import SignUp from './components/SignUp';
   import Login from './components/Login';
   import Phone from './components/PhoneSignUp';
   
   import Navbar from './components/Navbar';
   import   Verification from './components/Verification';
     import Footers from './components/Footers';
    import Accordian from './components/Accordian';
    import drop from './components/EmailDrop';
import EmailDrop from './components/EmailDrop';
import Dashboard from './components/Dashboard';
import CurrentServices from './components/CurrentServices';
import WhyChoose from './components/WhyChoose';
import { UserAuthContextProvider } from "./components/UserAuthContext";
import DogVetconseltation from './components/DogVetconseltation';
import DogBoarding from './components/DogBoarding';
import DogGrooming from './components/DogGrooming';
import DogTraining from './components/DogTraining';
import ServicesHeader4 from './components/ServicesHeader4';
import PhoneSignUp from './components/PhoneSignUp';
const App = () => {
  return (
    <>
  <UserAuthContextProvider>
    <Router>
    <Navbar/>
           <div className="App">
           <Routes>
           <Route exact path='/' element={< Dashboard />}></Route>
                 <Route exact path='/signup' element={< SignUp />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/register/phone' element={< PhoneSignUp />}></Route>


                 <Route exact path='/very' element={< Verification/>}></Route>
                 <Route exact path='/accordian' element={<Accordian/>}></Route>
                 <Route exact path='/drop' element={<EmailDrop/>}></Route>
                 <Route exact path='/c' element={<CurrentServices/>}></Route>
                 <Route exact path='/why' element={<WhyChoose/>}></Route>
                 <Route exact path='/services/boarding' element={<DogBoarding/>}></Route>
                 <Route exact path='/services/grooming' element={<DogGrooming/>}></Route>
                 <Route exact path='/services/training' element={<DogTraining/>}></Route>

                 <Route exact path='/services/consultation' element={<><DogVetconseltation/></>}></Route>
                 
                 
          </Routes>
          </div>
          <Footers/> 
       </Router>
       </UserAuthContextProvider>
    </>
  )
}

export default App 