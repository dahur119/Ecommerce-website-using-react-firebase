import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion';
import * as Falcons from "react-icons/fa"
import './service.css';



import serviceData from '../assets/data/serviceData'


function Services() {
  return <section>
    <Container>
        <Row>
            {
                serviceData.map((item, index)=>(
                    
                    <Col lg="3" md="4" key={index}>
                       
                    <motion.div whileTap={{scale:1.2}} className='service__item'  style={{background: `${item.bg}`}}>
                        <span></span>
                        <div >
                            <h6>{item.title}</h6>
                            <p>{item.subtitle}</p>
                        </div>
    
                    </motion.div>
                </Col>

                ))
            }
           
        </Row>
    </Container>
  </section>
}

export default Services