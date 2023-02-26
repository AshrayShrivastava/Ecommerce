import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ContextState } from '../context/Context';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (e) => {
    console.log(email, password)
    e.preventDefault();
};
  return (
    <>
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
      <Button variant="danger" onClick={(e) => handleSubmit(e)}>Login</Button>
    </>
  )
}
