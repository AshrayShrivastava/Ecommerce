import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ContextState } from '../context/Context';
import axios from 'axios';

export default function Signup({showSignup, setShowSignup, setShowLogin}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [userName, setUserName] = useState("");
  const [admin, setAdmin] = useState(false);
  

  const handleSubmit = () => {
    console.log(email, password);
    console.log(showSignup);
    const request = {
      "email":email,
      "password":password,
      "userName":userName,
      "firstName":firstName,
      "lastName":lastName
    }
    if(admin){
      request["role"]="admin";
    }else{
      request["role"]="user";
    }
    axios.post('adduser', request)
        .then(response => {
          console.log(response.data)
        });
};
  return (
    <>
    <Modal
      show={showSignup}
      onHide={()=>setShowSignup(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setRePassword(e.target.value)}/>
            </Form.Group>
            {password!==rePassword &&
            <Form.Text className="text-muted">
              Password Did't Match
            </Form.Text>}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Admin" onClick={()=>{setAdmin(!admin)}}/>
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setShowSignup(false)}>Close</Button>
        <Button variant="danger" onClick={() => handleSubmit()}>Signup</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
