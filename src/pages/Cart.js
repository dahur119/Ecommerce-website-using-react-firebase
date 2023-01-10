import React from 'react';
import '../style/cart.css';
import Helmet from '../helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import {Container, Row, Col} from 'reactstrap'
import tdImg from '../assets/images/arm-chair-01.jpg'
import {motion} from 'framer-motion';
import { cartActions } from '../redux/slice/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function Cart() {
  const cartItems = useSelector(state=>state.cart.cartItem)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  return <Helmet title='Cart'>
    <CommonSection title="Shopping Cart"/>
    <section>
      <Container>
        <Row>
          <Col lg="9">

            {
              cartItems.length === 0 ?  <h6 className='text-center'>No item in the cart</h6>  : (

                <table className='table bordered'>
            <thead>
              <tr>
                <th>image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems?.map((item, index)=>(
                  <Tr item={item} key={index}/>
                 
                ))
              }
             
            </tbody>
            </table>

              )
                
              
            }
            
          </Col>
          <Col lg="3">
            <div >
              <h6 className='d-flex align-items-center justify-content-between'>SubTotal
              <span className='fs-4 fw-bold'>${totalAmount}</span>
              </h6>
              
              <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
              <div >
                <button className='buy__btn w-100'><Link to="/shop">Continue Shopping </Link></button>
                <button className='buy__btn w-100 mt-2' ><Link to="/checkout">Checkout </Link></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>


  </Helmet>
}

const Tr = ({item}) =>{
  const dispatch = useDispatch()

  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return  <tr >
  <td><img src={item.imgUrl} alt=""/></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.p whileTap={{scale:1.2}} onClick={deleteProduct}>-</motion.p></td>
</tr>
}

export default Cart