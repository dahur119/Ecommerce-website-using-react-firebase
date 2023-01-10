import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hook/useGetData';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import {toast} from 'react-toastify';


function User() {

    const {data: userData, loading} = useGetData('users')

    const deleteUser = async(id)=>{
        await deleteDoc(doc(db, 'users', id))
        toast.success('user deleted ')
    }
  return <section>
    <Container>
        <Row>
            <Col lg="12">
                <h4 className='fw-bold'>Users</h4>
            </Col>
            <Col lg="12" className='pt-5'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <h5 className='pt-5 fw-bold'>loading</h5> : (
                                userData?.map(user=>(
                                    <tr key={user.id}>
                                        <td><img src={user.photoURl} alt=""/></td>
                                        <td>{user.displayName}</td>
                                        <td>{user.email}</td>
                                        <td><button onClick={()=>deleteUser(user.uid)} className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>

            </Col>
        </Row>
    </Container>
  </section>
}

export default User