import React from 'react';
import './footer.css';
import userEco from '../../assets/images/eco-logo.png';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';


const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" >
          <div className='logo'>
                    <img src={userEco} alt="logo"/>
                    <div>
                       <h1 className='black'>Better buy</h1> 
                    </div>
                </div>
                <p className='footer__text mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae corporis 
                laudantium a repellendus mollitia 
                earum labore veritatis incidunt, saepe consequatur
                </p>
          </Col>
          <Col lg="3" className='mb-4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'> Categories</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='#'>Mobile Phone</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Modern sofa</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Arm Chair</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              

            </div>
          </Col>
          <Col lg="3" className='mb-4'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>useful link   </h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='/shop'>shop</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>cart</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/login'>login</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/logout'>logout</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
           
              </div>
          </Col>
        <Col lg="3" className='mb-4'>
        <div className='footer__quick-links'>
              <h4 className='quick__links-title'>contact</h4>
                <ListGroup className='footer__contact'>
                  <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
                   <span><i class="ri-phone-line"></i></span>
                   <p>Badgary Area , lagos Nigeria </p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                   <span></span>
                   <p>2348027315128</p>

                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span></span>
                    <p>example@gmail.com</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span></span>
                  </ListGroupItem>

                </ListGroup>
       
              </div>
          
        </Col>
        <Col lg="12">
          <p className='footer__copyright text-center'>Copyright {year} All right resevered </p>
        </Col>

        </Row>
      </Container>
    </footer>
    
  )
}

export default Footer