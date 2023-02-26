import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(email, password)
    setShowLogin(false);
    e.preventDefault();
};

  return (
    <>
      <Button variant="outline-danger" onClick={()=>setShowLogin(true)}>Login</Button>
      <Modal
          show={showLogin}
          onHide={()=>setShowLogin(false)}
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
            <Button variant="link">
              <Link to="/signup">
                Signup
              </Link>
            </Button>
            <Button variant="secondary" onClick={()=>setShowLogin(false)}>Close</Button>
            <Button variant="danger" onClick={(e) => handleSubmit(e)}>Login</Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}
