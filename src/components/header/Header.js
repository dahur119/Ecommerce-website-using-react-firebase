import React from 'react'
import { useRef, useEffect } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import userIcon from  '../../assets/images/user-icon.png';
import userEco from '../../assets/images/eco-logo.png';
import { Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import * as Falcons from "react-icons/fa"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import useAuth from '../../custom-hook/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const Nav__links = [
    {
        path:'home',
        display:"Home"
    }, 
    {
        path:'cart',
        display:"Cart"
    }, 
    {
        path:'shop',
        display:"Shop"
    }, 
   

]



function Header() {
    const totalQuantity= useSelector(state=>state.cart.totalQuantity)

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const profileActionsRef = useRef(null);

    const navigate = useNavigate()
    const {currentUser} = useAuth()

    const navigateToCart =() =>{
        navigate('/cart')
    }

    const stickRefFunc = () =>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
                headerRef.current.classList.add("sticky__header")
            }else{
                headerRef.current.classList.remove("sticky__header")
            }
        })
    }


    useEffect(()=>{
        stickRefFunc()

        return ()=>window.removeEventListener('scroll', stickRefFunc);
    },[])

    const logout =()=>{
        signOut(auth).then(()=>{
            toast.success('logout')
            navigate('/home')
        }).catch(err=>{
            toast.error(err.message)

        })
    }

    const toggleMenuFunc = ()=> menuRef.current.classList.toggle("active__menu")

    const toggleProfileFunc = ()=>profileActionsRef.current.classList.toggle("show__profileAction")
   


  return <header className='header' ref={headerRef}>
    <Container>
        <Row>
            <div className='nav__wrapper'>
                <div className='logo'>
                    <Link to='home'><img src={userEco} alt="logo"/></Link>
                    
                    <div>
                       <h1><Link to="home">Better Buy</Link></h1> 
                    </div>
                </div>
                <div className='navigation' ref={menuRef} onClick={toggleMenuFunc}>
                    <ul className='menu'>
                        {
                            Nav__links.map((item, index)=>(
                                <li className='menu-item' key={index}>
                                <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink> 
                            </li>


                            ))
                        }
                      
                        
                      
                    </ul>

                </div>
                <div className='nav__icons'>
                    <span className='fav__icons'><Falcons.FaHeart/>
                    <span className='badge'>1</span>
                  
                    </span>
                    <span className='cart__icons' onClick={navigateToCart}><Falcons.FaCartPlus/>
                    <span className='badge'>{totalQuantity}</span>
                 
                    </span>
                    <div className='profile'>
                    <motion.img 
                     whileTap={{scale:1.2}} 
                     src={currentUser ? currentUser.photoURL : userIcon} 
                     alt="" 
                     onClick={toggleProfileFunc}
                     
                     />


                    <div className='profile__actions' 
                     ref={profileActionsRef} 
                     onClick={toggleProfileFunc}>
                        {
                            currentUser ? (
                            <span onClick={logout}>Logout</span>
                            ) : (
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <Link to='/signup'>signUp</Link>
                                <Link to='/login'>login</Link>
                                <Link to='/dashboard'>Dashboard</Link>
                            </div>
                            )
                        }
                     

                    </div>
                    </div>
                    <div className='mobile__menu' >
                    <span onClick={toggleMenuFunc}><Falcons.FaUserMinus/></span>

                </div>

                </div>
           

            </div>
        </Row>
    </Container>


  </header>
}

export default Header