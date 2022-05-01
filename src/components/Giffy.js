import React from 'react'
import Card from './Card'
import '../Card.css'
export default function  Giffy() {
  return (
    <div style={{"display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","marginTop":"10%"}}><h1>Book Your Trainer In A Giffy</h1>
      <div className='cards-cont'>
      <Card content = {"Register to the package and specify all the details."}></Card>
        <Card content = {"Upload the vaccination chart."}></Card>
        <Card content = {"A verification check gets scheduled by our executive."}></Card>
        <Card content = {"Walker gets allotted according to the needs."}></Card>
        <Card content = {"Get first four walk on trial basis and refund on dissatisfaction."}></Card>

      </div>
      
    </div>
  )
}
