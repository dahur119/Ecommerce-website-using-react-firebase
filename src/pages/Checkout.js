import React from 'react'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap'
import Helmet from '../helmet/Helmet'
import CommonSection from '../components/ui/CommonSection'
import '../style/checkout.css';
import { useSelector } from 'react-redux';

function Checkout() {

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)


  return <Helmet title="checkout">
    <CommonSection title="Checkout"/>
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h6 className='mb-4 fw-bold text-center'>Billing Information</h6>
            <Form>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Enter Your Name'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="email" placeholder='Enter Your Email'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="number" placeholder='Enter Your Phone number'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="text" placeholder='street Address'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="text" placeholder='city'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="number" placeholder='Postal Code'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Country'/>
              </FormGroup>

              

            </Form>
          </Col>

          <Col lg="4">
            <div className='checkout__cart'>
            <h6>Total Qty: <span>{totalQty} items</span></h6> 
            <h6>SubTotal: <span>${totalAmount}</span></h6> 
            <h6><span>Shipping: <br/>free shipping</span> <span>$0</span></h6> 

            <h4>Total Cost: <span>${totalAmount}</span></h4>
            <button className='buy__btn auth__btn w-100'>place an order</button>
            
            </div>
            

          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout