

import {React, useEffect, useState} from 'react'
import Helmet from '../helmet/Helmet'
import products from '../assets/data/products'
import { Container, Row, Col} from 'reactstrap'
import front from '../assets/images/hero-img.png'
import '../style/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductLIst from '../components/ui/ProductLIst';
import counter from '../assets/images/counter-timer-img.png'
import Clock from '../components/ui/Clock'
import useGetData from '../custom-hook/useGetData'
function Home() {
  const [trendingPost, setTrendingPost] = useState([]);
  const [bestSales, setBestSales] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const {data:products, loading} = useGetData('products')


  useEffect(()=>{
    const filterChair = products.filter(item=>item.category === "chair")
    const filterBestSofa = products.filter(item=>item.category === "sofa")
    const filterMobileProducts = products.filter(item=>item.category === "mobile")
    const filterWirelessProducts = products.filter(item=>item.category === "wireless")
    const filterPopularProducts = products.filter(item=>item.category === "watch")
    
    
    

  

    setTrendingPost(filterChair)
    setBestSales(filterBestSofa)
    setMobileProducts(filterMobileProducts)
    setWirelessProducts(filterWirelessProducts)
    setPopularProducts(filterPopularProducts)
    

  }, [products])
  const year = new Date().getFullYear()
  return <Helmet title={'Home'} >
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className='hero__content'>
              <p className='her__subtitle'>Trending product in {year}</p>
              <h2>Best Buy And Sell Your Interior</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae corporis 
                laudantium a repellendus mollitia 
                earum labore veritatis incidunt, saepe consequatur </p>  
                <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to="/shop">Best Buy</Link></motion.button>   
            </div>

          </Col>
          <Col lg="6" md="6">
            <div>
              <img src={front} alt="front" className='w-60'/>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className='trending__post'>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          {
            loading? <h4 className='pt-5'>Loading...</h4> : 
            <ProductLIst data={trendingPost}/>
          }
         
        </Row>
      </Container>
    </section>
    <section className='best__sales'>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>
          {
            loading? <h4 className='pt-5'>Loading...</h4> : 
            <ProductLIst data={bestSales}/>
          }
          
        </Row>
      </Container>
    </section>
    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg="6" md="6" className='count_down_col'>
            <div className='clock__top-content'>
              <h4 className='text-black fs-6 mb-3'>Limited Offer</h4>
              <h3 className='text-black fs-6 mb-3'>Quality ArmChair</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale:1.2}} className='store_btn buy__btn '><Link to="/shop">Visit Store</Link></motion.button>
          </Col>
          <Col lg="6" md="6" className='text-end counter__img'>
            <img src={counter} alt="counter" className='w-50 '></img>
          </Col>
        </Row>
      </Container>

    </section>

    <section className='new__arrival'>
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading...</h4> : 
            <ProductLIst data={mobileProducts}/>
          }

{
            loading ? <h4 className='fw-bold'>Loading...</h4> : 
            <ProductLIst data={wirelessProducts}/>
          }
         
         
        </Row>
      </Container>
    </section>

    <section className='popular__category'>
    <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className='section__title'>Popular in category</h2>
          </Col>
          <ProductLIst data={popularProducts}/>
         
        </Row>
      </Container>


    </section>

  </Helmet>
}

export default Home 