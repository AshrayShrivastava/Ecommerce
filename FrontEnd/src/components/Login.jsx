import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Signup from './Signup';
import axios from 'axios';
import { ContextState } from '../context/Context';

export default function Login() {

  const {updateUser, UpdateLogin, user}=ContextState();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning]=useState(false);

  const handleSubmit = () => {
    const request = {
      "email":email,
      "password":password
    }
    axios.post('getuser', request)
    .then(response => {
      console.log(response.data);
      updateUser(response.data);
      if(response.data.userId!==-1){
        UpdateLogin(true);
        setShowLogin(false);
      }else{
        setWarning(true);
      }
    });
  };

  const openSignup=()=>{
    setShowLogin(false);
    setShowSignup(true);
  }
  return (
    <>
      <Button variant="outline-danger" onClick={()=>{
        setShowLogin(true);
        setWarning(false);
        console.log(user);
      }}>
          Login
      </Button>
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
            {warning &&
            <Form.Text className="text-muted">
              Invalid Credentials
            </Form.Text>
            }
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={()=>openSignup()}>
                Signup
            </Button>
            <Button variant="secondary" onClick={()=>setShowLogin(false)}>Close</Button>
            <Button variant="danger" onClick={(e) => handleSubmit(e)}>Login</Button>
          </Modal.Footer>
      </Modal>
      <Signup showSignup={showSignup} setShowSignup={setShowSignup} setShowLogin={setShowLogin}/>
    </>
  );
}
