import React from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";
import "./Contact.css";
const Contact = () => {
  return(
    <div>
    <div className="from-container">
    <Menubar></Menubar>
    <h1>GET IN TOUCH</h1>
    <Form className="from">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="label">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted"> 
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="label">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <Button variant="danger" type="submit">
    Submit
  </Button>
</Form>
    </div>
    <Footer></Footer>
    </div>
    )
}
export default Contact