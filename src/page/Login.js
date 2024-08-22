import React from 'react'
import { Container,Button,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Login({setAuthenticate}) {
  const nav = useNavigate()
  const loginUser = (event) =>{
    event.preventDefault()
    setAuthenticate(true)
    nav('/')
  }
  return (
    <div>
      <div className='login-box'>
        <Container fluid="sm">
      <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="info" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
    </div>
    </div>
  )
}

export default Login