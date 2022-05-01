import React from 'react'
import CurrentServices from './CurrentServices';
import EmailDrop from './EmailDrop';
import OfferPackage from './OfferPackage';
import WhyChoose from './WhyChoose';
import ServicesBox from './ServicesBox';
import Accordian from './Accordian';
import DogServiceBox from './DogServiceBox';
import HomeJumbotron from './HomeJumbotron'
import '../jumbotron.css'
const Dashboard = () => {
  return (
    <>
<div style = {{"marginTop" : "-17vw"}}></div>

    <HomeJumbotron></HomeJumbotron>
{/* <div style = {{"marginTop" : "25vw"}}></div> */}

    <CurrentServices/>
    <ServicesBox></ServicesBox>
    <DogServiceBox></DogServiceBox>

<WhyChoose/>
<OfferPackage/>
<EmailDrop/>
{/* testimonial */}


{/* testimonial end */}
<Accordian></Accordian>


    </>
  )
}

export default Dashboard