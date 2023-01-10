import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import useGetData from '../custom-hook/useGetData';
import { db } from '../firebase.config';
import {toast} from 'react-toastify';

function AllProducts() {
  const {data:productData, loading} = useGetData('products');
  console.log(productData)

  const deleteProduct = async(id) =>{
    await deleteDoc(doc(db, 'products', id))
    toast.success('item is being deleted')
  }
 
  return (
    <section>
    <Container>
      <Row>
        <Col>
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action </th>
            </tr>
          </thead>
          {
            loading ? <Col className='text-center fw-bold'><h4>loading...</h4></Col> : <>

{
            productData?.map((item)=>(
              <tr key={item.id}>
              <td><img src={item.imgURl} alt="" /></td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td><button onClick={()=>{deleteProduct(item.id)}} className='btn btn-danger'>Delete</button></td>
            </tr>

            ))
           
          }


            </>
          }
          
        
       
        </table>
        </Col>
      </Row>
    </Container>
  </section>

  ) 
}

export default AllProducts