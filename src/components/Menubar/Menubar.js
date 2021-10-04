import raect from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from "../..//images/Logo/dance.jpg";
import "./Menubar.css";
import { Link } from "react-router-dom";

const Menubar = () => {
	return(
  <div>
  <Navbar variant="dark" className='nav'>
    <Container className='row'>
    <div className='col-md-2'>
     <div className="logo-img">
        <h2>D DANCE</h2>
        <img className="w-50" src={Logo} alt="" />
      </div>
      </div>
      <div className='col-md-8'>
    <Nav className="d-flex align-items-end justify-content-end">
      <Link to="/home" className='item'>Home</Link>
      <Link to="/services" className='item'>Services</Link>
      <Link to="/about" className='item'>About</Link>
       <Link to="/contact" className='item'>Contact Us</Link>
    </Nav>
    </div>
    </Container>
  </Navbar>
		</div>
		)
}

export default Menubar