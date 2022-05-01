import React ,{useState} from 'react'
 import '../Navbar.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from '@mui/material/Button';
 import Menu from '@mui/material/Menu';
 import MenuItem from '@mui/material/MenuItem';
 import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    
         <nav style={{"position": "sticky","top":"0"}} >
         <div className={`sidebar ${isOpen?'open':'close'}`}>
         <ul className= "nav-links column">
<div>
<Hamburger  toggled={isOpen} toggle={setOpen}></Hamburger>

</div>
            <li><a href="#">Home</a></li>
            <li><a >
            <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       Services
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link to = "/services/boarding"><MenuItem onClick={handleClose}>Boarding</MenuItem> </Link> 
        <Link to = "/services/consultation"><MenuItem onClick={handleClose}>Vet Consultation</MenuItem> </Link>
        <Link to = "/services/grooming"><MenuItem onClick={handleClose}>Grooming</MenuItem> </Link>
        <Link to = "/services/training"><MenuItem onClick={handleClose}>Dog Training</MenuItem> </Link>

      </Menu>

              </a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><button className="login-button" href="#">Login</button></li>
            <li><button className="join-button" href="#">Register</button></li>
        </ul>
        </div>
        <div className="logo" >
            <img src= "logo_furfurs.png" alt="logo"/>
        </div>
        {/* <div className="hamburger">
             <div className="line1"></div>
             <div className="line2"></div>
             <div className="line3"></div>
        </div> */}
       
      
        {/* <ul className={HumBurger ? "nav-links mob-nav-links":"nav-links"}> */}
        

        <ul className= "nav-links">
            <li><Link to = "/">Home</Link></li>
            <li><a >
            <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       Services
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link to = "/services/boarding"><MenuItem onClick={handleClose}>Boarding</MenuItem> </Link> 
        <Link to = "/services/consultation"><MenuItem onClick={handleClose}>Vet Consultation</MenuItem> </Link>
        <Link to = "/services/grooming"><MenuItem onClick={handleClose}>Grooming</MenuItem> </Link>
        <Link to = "/services/training"><MenuItem onClick={handleClose}>Dog Training</MenuItem> </Link>

      </Menu>

              </a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><button className="login-button" href="#">Login</button></li>
            <li><button className="join-button" href="#">Register</button></li>
            
        </ul>
        <div class = "ham">
        <Hamburger toggled={isOpen} toggle={setOpen} ></Hamburger>
        </div>
    </nav>
    </>
  )
}

export default Navbar