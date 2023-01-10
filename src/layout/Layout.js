import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Router from '../router/Router'
import AdminNav from '../admin/AdminNav'
import { useLocation } from 'react-router-dom'

///layouts  checkot checked
function Layout() {

  const location = useLocation()

  return <>
  {
    location.pathname.startsWith('/dashboard') ? <AdminNav/> : <Header/>
  }

  <div>
    <Router/>
  </div>
  <Footer/>
  </>
}

export default Layout