import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../style/dashboard.css'
import useGetData from '../custom-hook/useGetData'


function Dashboard() {

  const {data:products} = useGetData('products')
  const {data:users} = useGetData('users')
  return (
    <section>
     <Container>
      <Row>
        <Col className='lg-3'>
          <div className='revenue__box'>
            <h5>Total Sales</h5>
            <span>$700</span>

          </div>
        </Col>
        <Col className='lg-3'>
          <div className='order__box'>
            <h5>Total Sales</h5>
            <span>$78000</span>

          </div>
        </Col>
        <Col className='lg-3'>
          <div className='products__box'>
            <h5>Total Products</h5>
            <span>{products.length}</span>

          </div>
        </Col>
        <Col className='lg-3'>
          <div className='user__box'>
            <h5>Total user</h5>
            <span>{users.length}</span>

          </div>

        </Col>
      </Row>
    </Container>
    </section>

  )
   
 
}

export default Dashboard