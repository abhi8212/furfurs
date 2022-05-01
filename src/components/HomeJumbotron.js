import React , {useState , useEffect} from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function HomeJumbotron() {
  const [dImg , setDImg]  = useState("https://res.cloudinary.com/sidd293/image/upload/v1651212920/rounded_corners__1_-removebg-preview_4_s95ovk.png");
var i = 0;
  useEffect(() => {
var d = setInterval(()=>{
i++;
if(i%2) setDImg("https://res.cloudinary.com/sidd293/image/upload/v1651212920/rounded_corners__1_-removebg-preview_4_s95ovk.png")
else setDImg("https://res.cloudinary.com/sidd293/image/upload/v1651346095/dog2_4_ryfmwv.png")
},3000)
console.log(i);
  return () => {
    clearInterval(d);
  }
}, [])

  return (
    <div className="jumbotron" >
  
      <div class = "svgbox" style={{"zIndex":"0"}} >
        <svg width="110%" style = {{"marginTop" : "12vw"}} height="70%" viewBox="0 0 1440 740" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_7023)">
<path d="M242 621.5C129.323 603.806 -8 470.5 -8 470.5L-68 -37L845.5 -95C845.5 -95 1115.93 -92.4165 1241 6.5C1387.4 122.287 1483.27 266.609 1430 445.5C1376.29 625.874 1214.7 710.295 1026.5 709C840.261 707.719 815.033 454.341 629 445.5C463.159 437.619 406.018 647.256 242 621.5Z" fill="#FFDF2C"/>
</g>
<defs>
<filter id="filter0_d_1_7023" x="-108" y="-115" width="1592.89" height="884.015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="20"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.870588 0 0 0 0 0.34902 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_7023"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_7023" result="shape"/>
</filter>
</defs>
</svg>
</div>
<div className='svgbox2' style= {{"zIndex":"1"}}>
<svg width="100vw" style = {{"marginTop" : "4vw","zIndex":"-1"}} height="100%"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FFE96E" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,213.3C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>

      </div>
<div  className='jumbotron-container' >
  <div style = {{"marginTop" : "15vw" ,"zIndex": "3"}} className = "j-textsec">
    <h1 className = "jumbotron-title">
Dont You Want The Best For Them?
</h1>
<h1 className = "jumbotron-title" style = {{"fontSize": "3vw"}}>
Dont Worry ForFurs is Here
</h1>
<div className = "jumbotron-title j-btn" style = {{"fontSize": "2vw"}}>
Get Started
</div>
  </div>
  <div className='j-textsec imgsec' >
  <svg className='j-blob' style = {{"marginTop" : "15vw"}} viewBox="-60 -30 220 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FFDE59" d="M63.8,-0.7C63.8,30.9,31.9,61.9,0.1,61.9C-31.7,61.9,-63.4,30.9,-63.4,-0.7C-63.4,-32.4,-31.7,-64.8,0.1,-64.8C31.9,-64.8,63.8,-32.4,63.8,-0.7Z" transform="translate(100 100)" />
</svg>
<img  className='j-img' src = {dImg} style = {{"marginTop" : "15vw"}}/>
  </div>

  

</div>

          </div>
  )
}

export default HomeJumbotron