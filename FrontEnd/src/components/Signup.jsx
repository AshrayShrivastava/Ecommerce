import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Signup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  
  const handleCloseSignup = () => setShow(false);
  const handleShowSignup = () => setShow(true);

  const handleSubmit = (e) => {
    console.log(email, password)
    handleCloseSignup();
    e.preventDefault();
};
  return (
    <>
      <Button variant="primary" onClick={handleShowSignup}>Login</Button>
      <Modal
          show={show}
          onHide={handleCloseSignup}
          backdrop="static"
          keyboard={false}
      >
          <Modal.Header closeButton>
              <Modal.Title>Signup</Modal.Title>
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Re enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setRePassword(e.target.value)}/>
              </Form.Group>
              {password!==rePassword &&
              <Form.Text className="text-muted">
                Password Did't Match
              </Form.Text>}
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link">
              asd
            </Button>
            <Button variant="secondary" onClick={handleCloseSignup}>Close</Button>
            <Button variant="danger" onClick={(e) => handleSubmit(e)}>Login</Button>
          </Modal.Footer>
      </Modal>
    </>
  )
}
