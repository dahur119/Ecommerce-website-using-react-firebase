import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useAuth from '../custom-hook/useAuth'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiNotification} from 'react-icons/bi'
import '../style/admin-nav.css';
import { NavLink } from 'react-router-dom'
import { NavbarContext } from 'rsuite/esm/Navbar'

const admin__nav = [
    {
        display:'Dashboard',
        path:'/dashboard'
    },
    {
        display:'All-Products',
        path:'/dashboard/all-products'
    },
    {
        display:'Orders',
        path:'/dashboard/orders'
    },
    {
        display:'Users',
        path:'/dashboard/users'
    }

]
function AdminNav() {

    const {currentUser} = useAuth()
  return <>
  <header className='admin__header'>
    <div className='admin__nav-top'>
        <Container>
           <div className='admin__nav-wrapper-top '>
            <div className='logo'>
                <h2>BetterBuy</h2>

            </div>
            <div className='search__box'>
                <input type='text' placeholder='Search....'/>
                <span>search</span>

            </div>
            <div className='admin__nav-top-right'>
                <span><AiOutlineSearch/></span>
                <span><BiNotification/></span>
                <img src={currentUser && currentUser.photoURL} alt=""/>


            </div>


           </div>
        </Container>

    </div>
    

  </header>

  <section className='admin__menu p-0'>
    <Container>
        <Row>
            <div className='admin__navigation'>
                <ul className='admin__menu-list'>
                    {
                        admin__nav.map((item, index)=>(
                            <li className='admin__menu-item' key={index}> 
                                <NavLink to={item.path} 
                                className={navClass =>navClass.isActive ? 'active__admin-menu' : ""}
                                
                                >{item.display}</NavLink>

                            </li>
                            
                        ))
                    }

                </ul>

            </div>
        </Row>
    </Container>
  </section>
  </> 
}

export default AdminNav