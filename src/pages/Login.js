import React from 'react'
import Helmet from '../helmet/Helmet'
import { Container, Row, Col,Form, FormGroup } from 'reactstrap'
import '../style/login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async(e) =>{
    e.preventDefault()
    setLoading(true)

    try {

      const useCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = useCredential.user;
      console.log(user)
      setLoading(false)
      toast.success('successfully logged in')
      navigate('/checkout')

      
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
      
    }

  }


  return <Helmet title="login">
    <section>
      <Container>
        <Row>
          {
            loading ? <Col lg="12" ><h4 className='text-center'>Loading...</h4></Col> : (
              <Col lg="6" className='m-auto text-center '>
            <h3 className='fw-bold fs-4'>Login</h3>
         
          <Form className='auth__form' onSubmit={signIn}>
            <FormGroup className='form__group'>
              <input type="email" placeholder="Enter Your Email" value={email} onChange={e=>setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="password" placeholder="Enter Your Password"   value={password} onChange={e=>setPassword(e.target.value)}/>
            </FormGroup>
            <button type='submit' className='buy__btn auth__btn w-100'>Login</button>
            <p>Don't have an account? {" "} <Link to="/signup"> create an account</Link> </p>
          </Form>
          </Col>

            )
          }
          
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Login