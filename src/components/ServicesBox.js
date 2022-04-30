import React from 'react'
import '../ServicesBox.css';

const ServicesBox = () => {
  return (
    <>
            <div className="services">
        <div className="top-boxes">
            <div className="top-box-main">
            <div className="top-box">
                <img src="dog.png" alt=""/>
            </div>
            <p>Dog Walking</p>
        </div>
        <div className="top-box-main">
            <div className="top-box">
                <img src="grooming.png" alt=""/>
            </div>
            <p>Dog grooming</p>
        </div>

            <div className="top-box-main">
            <div className="top-box">
                <img src="dog-house.png" alt=""/>
            </div>
            <p>Dog Boarding</p>
        </div>

            <div className="top-box-main">
            <div className="top-box">
                <img src="stethoscope 1.png" alt=""/>
            </div>
            <p>Vet Consultation</p>
        </div>
            <div className="top-box-main">
            <div className="top-box">
                <img src="dog-training.png" alt=""/>
            </div>
            <p>Dog Training</p>
        </div>
        </div>
        </div>
        </>
    
  )
}

export default ServicesBox