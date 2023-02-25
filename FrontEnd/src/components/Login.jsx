import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Signup from './Signup'

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleCloseLogin = () => setShow(false);
  const handleShowLogin = () => setShow(true);

  const handleSubmit = (e) => {
    console.log(email, password)
    handleCloseLogin();
    e.preventDefault();
};

  return (
    <>
      <Button variant="outline-danger" onClick={handleShowLogin}>Login</Button>
      <Modal
          show={show}
          onHide={handleCloseLogin}
          backdrop="static"
          keyboard={false}
      >
          <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="link">
              <Signup handleShowLogin={handleShowLogin}/>
            </Button> */}
            <Button variant="secondary" onClick={handleCloseLogin}>Close</Button>
            <Button variant="danger" onClick={(e) => handleSubmit(e)}>Login</Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}
