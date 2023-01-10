import React from 'react'
import Helmet from '../helmet/Helmet'
import { Container, Row, Col,Form, FormGroup } from 'reactstrap'
import '../style/login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../firebase.config'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {storage} from '../firebase.config';
import {setDoc, doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import { useNavigate  } from 'react-router-dom';

import {toast} from 'react-toastify';



function SignUp() {
  const [userName, setUserName] = useState('');
  const [file, setFile] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const signUp = async(e)=>{
    e.preventDefault()
    setLoading(true);


    try{
      const useCredential = await createUserWithEmailAndPassword(auth,
        email,
        password
      );

      const user = useCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + userName}`)
      const uploadTask = uploadBytesResumable(storageRef,file)

      uploadTask.on((error)=>{
        toast.error(error.message)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURl)=>{
          // update user profile
         await updateProfile(user,{
            displayName:userName,
            photoURL:downloadURl
          });

          // store user date in firestore datatbase 

        const docRef=  await setDoc(doc(db,'users', user.uid), {
            uid: user.uid,
            displayName:userName,
            email, 
            photoURL:downloadURl
          });
          console.log(docRef)


        });
      })

      setLoading(false)
      toast.success('Account Created')
      navigate('/login')

      


    }catch(error){
      setLoading(false)
      toast.error("something went wrong")

    }

   


  }
  return <Helmet title="Signup">
    <section>
      <Container>
        <Row>
          {
            loading ? <Col lg="12"><h6 className='text-center fw-600'>loading...</h6></Col>  : (
              <Col lg="6" className='m-auto text-center '>
            <h3 className='fw-bold fs-4 mb-4'>SignUp</h3>
         
          <Form className='auth__form' onSubmit={signUp}>
            <FormGroup className='form__group'>
              <input type="text" placeholder="Username" value={userName} onChange={e=>setUserName(e.target.value)} />
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="email" placeholder="Enter Your Email" value={email} onChange={e=>setEmail(e.target.value)} />
            </FormGroup>
           


            <FormGroup className='form__group'>
              <input type="password" placeholder="Enter Your Password"   value={password} onChange={e=>setPassword(e.target.value)}/>
            </FormGroup>
            <FormGroup className='form__group'>
              <input type="file" onChange={e=>setFile(e.target.files[0])} />
            </FormGroup>
            <button type='submit' className='buy__btn auth__btn w-100'>Create An Account</button>
            <p>Already have an account? <Link to="/login">Login</Link> </p>
          </Form>
          </Col>
            )
          }
          
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default SignUp