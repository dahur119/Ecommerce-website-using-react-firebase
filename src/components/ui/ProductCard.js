import {React} from 'react'
import productImg07 from '../../assets/images/arm-chair-01.jpg'
import {  Col } from 'reactstrap'

import {GrAdd} from 'react-icons/gr';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/CartSlice';
import { toast } from 'react-toastify';

function ProductCard({item}) {
  const dispatch = useDispatch();

  const addToCart =()=>{
    dispatch(cartActions.addItem({
      id:item.id,
      productName:item.productName,
      price:item.price,
      imgUrl:item.imgUrl
    }))

    toast.success('product added successfully')

   
  }




  return (
    <Col lg="3" md="4" className='mb-2'>
      <div className='product__item ' >
       <div className='product__img  '>
        <motion.img whileTap={{scale:0.9}} src={item.imgUrl} alt="img"/>
       </div>  
       <div className='p-2 product__info'>
       <h5 className='product__name'><Link to={`/shop/${item.id}`}>{item.productName} </Link></h5>
        <span>{item.category}</span>

       </div>
        
        <div className='product__card_button d-flex align-items-center justify-content-between'>
          <motion.span  className='product__price'>${item.price}</motion.span>
          <motion.span whileTap={{scale:1.2}} className="add__line" onClick={addToCart}>
            <GrAdd/>
            </motion.span>

        </div>


    </div>
    </Col>
  )
}

export default ProductCard