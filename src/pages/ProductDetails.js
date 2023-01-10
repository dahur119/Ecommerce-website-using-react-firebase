import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router';
import products from '../assets/data/products';
import Helmet from '../helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import '../style/ProductDetail.css'
import { motion } from 'framer-motion';
import ProductLIst from '../components/ui/ProductLIst';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slice/CartSlice';
import {toast} from 'react-toastify'
import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../custom-hook/useGetData';

function ProductDetails() {

  const [product, setProduct] = useState({})


  const dispatch = useDispatch()

  const [tab, setTab ]= useState('desc');
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const [rating, setRating] = useState(null)
  const [rev, setRev] = useState('rev');
  const {id} = useParams();

  const {data:products} = useGetData('products')
  // const product = products.find(item=>item.id===id)
  console.log('hello', product)

  const docRef = doc(db, 'products', id)

  useEffect(()=>{
    const getProduct = async ()=>{
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        setProduct(docSnap.data())
      }else{
        console.log('no products')
      }
    }
    getProduct()
  }, [])

  const submitHandler =(e) =>{
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value;


    const reviewObj = {
      username:reviewUserName,
      text:reviewUserMsg, 
      rating

    }
    console.log('review', reviewObj)
    toast.success('Review submitted')
   
  }

  const addToCart =()=>{
    dispatch(cartActions.addItem({
      id, 
      productName,
      image:imgUrl,
      price,

    }))
    toast.success('item has been added ')
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)

  }, [product])

  const {imgUrl,
    productName,
     price, 
     category,
    //  avgRating,
     shortDesc, 
    //  reviews,
     description} =  product


  const relatedProduct = products.filter((item)=>item.category === category)
  console.log('yam', relatedProduct)

  return <Helmet title={productName}>
    <CommonSection title={productName}/>
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt=''/>
          </Col>
          <Col lg="6">
            <div className='ProductDetail'>
              <h2>{productName}</h2>
              <div className='product__rating d-flex align-items-center gap-5 mb-3 rating__group'>
                {/* <div>
                  <motion.span>rating</motion.span>
                  <motion.span>rating</motion.span>
                  <motion.span>rating</motion.span>
                  <motion.span>rating</motion.span>
                </div> */}
                {/* <p>{avgRating} rating</p> */}
                

              </div>
              <div className='d-flex align-items-center gap-3'>
              <span className='product__price'> ${price}</span>
              <span>Category:{category}</span>
                
              </div>
              
              <p>{shortDesc}</p>
              <motion.button whileTap={{scale:1.2}} className='buy__btn' onClick={addToCart}>Add to Cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className='tab__warper d-flex align-items-center  gap-3'>
              <h6 className={`${tab==="desc" ? "active__tab": ""}`} onClick={()=>setTab('desc')}>Description</h6>

              <h6 className={`${tab==="rev" ? "active__tab": ""}`} onClick={()=>setTab('rev')} >Reviews
               {/* ({reviews.length}) */}
               </h6>

            </div>

            {
              tab === "desc"  ?   <div className='tab__content mt-4'>
            
                <p className='tab__content mt-5'>{description}</p> 

              </div>: (
                <div className='product__reviews mt-5'>
                  <div className='review__wrapper'>
                    {/* <ul>
                      {
                        reviews.map((item, index)=>(
                          <li key={index} className="mt-4">
                            <h6>felix</h6>
                            <span>{item.rating} (avgRating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul> */}
                    <div className='review__form'>
                      <h4>Leave Your experience</h4>
                      <form action='' onSubmit={submitHandler }>
                        <div className='form__group'>
                          <input type="text" placeholder='Enter name'  ref={reviewUser}/>
                          
                        </div>
                        <div className='form__group d-flex align-items-center gap-3'>
                          <span onClick={()=>setRating(1)}>1</span>
                          <span onClick={()=>setRating(1)}>2</span>
                          <span onClick={()=>setRating(1)}>3</span>
                          <span onClick={()=>setRating(1)}>4</span>
                          <span onClick={()=>setRating(1)}>5</span>



                        </div>
                        <div className='form__group'>
                          <textarea  rows={4} type="text" placeholder='Review Message' ref={reviewMsg} />
                          </div>
                          <motion.button type='submit' whileTap={{scale:1.2}} className='buy__btn'>Submit</motion.button>
                      </form>


                    </div>

                  </div>
                </div>
              )
            }
          
          </Col>

          <Col lg="12" className='mt-5'>
            <h2 className='related__product '> You might also like</h2>
           
          </Col>
          < ProductLIst data={relatedProduct} className="d-flex align-items-center"/>
        </Row>

      </Container>
    </section>

  </Helmet>
}

export default ProductDetails