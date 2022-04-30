import React ,{useState} from 'react';
import {Data} from '../Data.js';
import '../frequent.css';
import ServicesBox from './ServicesBox.js';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Accordian = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <>
    <div className='frequent'>
    <h1>Frequently Asked Question</h1>
    <ServicesBox/>
    <h1>Dog Grooming</h1>
    <div className='acc-sec'>
    <div className='accordian'>
     {
       Data.map((item,index)=>{
         const{question,answer}=item;
         return(
           <>
           <div className="acc-one">
           <div className="question" key={index}>
           <h2>{question}</h2>
          <p onClick={() => toggle(index)} key={index}> {clicked === index ? <FiMinus/> : <FiPlus/>} </p>
           </div>

           {clicked === index ? (
                  <div className='answer'>
                    <p>{answer}</p>
                  </div>
                 
                ) : null}
                </div>
          </>
         );
       })}
       </div>
       <div className="top-box-walk">
                <img src="dog_walking_que.png" alt=""/>
            </div>
            
       </div>

       </div>

       </>
  )
}

export default Accordian