import React from 'react'
import CommonSection from '../components/ui/CommonSection'
import Helmet from '../helmet/Helmet';
import {Container, Row, Col} from 'reactstrap'
import '../style/shop.css';
import products from '../assets/data/products';
import { useState} from 'react';
import ProductLIst from '../components/ui/ProductLIst';

function Shop() {
  const [productsDetails, setProductDetails] = useState(products)  
  
  

  const handleFilter = e =>{
   const filterValue = e.target.value;
   if(filterValue === "sofa"){
    const  filterProducts = products.filter(item=> item.category === "sofa")
     console.log('check',filterProducts);
     setProductDetails(filterProducts)

   }

   if(filterValue === "mobile"){
    const  filterProducts = products.filter(item=> item.category === "sofa")
     console.log('check',filterProducts);
     setProductDetails(filterProducts)

   }

   if(filterValue === "watch"){
    const  filterProducts = products.filter(item=> item.category === "watch")
     console.log('check',filterProducts);
     setProductDetails(filterProducts)

   }
   if(filterValue === "chair"){
    const  filterProducts = products.filter(item=> item.category === "chair")
     console.log('check',filterProducts);
     setProductDetails(filterProducts)

   }

   if(filterValue === "wireless"){
    const  filterProducts = products.filter(item=> item.category === "wireless")
     console.log('check',filterProducts);
     setProductDetails(filterProducts)

   }    
  }

  const handleSearch = e =>{
    const filterSearch = e.target.value;

    const searchProduct = products.filter(item=>item.productName.toLowerCase().includes(filterSearch.toLowerCase()))
    
    setProductDetails(searchProduct)
  }


   const  handleSort = e =>{
      const sortFilter = e.target.value;

      if(sortFilter  === "ascending"){
        const sortAscending = products.sort((a,b)=> a.id - b.id)
        console.log('sort',sortAscending)
        setProductDetails(sortAscending)

      }

      if(sortFilter  === "descending"){
        const sortAscending = products.sort((a,b)=> b.id - a.id)
        console.log('sort',sortAscending)
        setProductDetails(sortAscending)

      }
      
     
    }
    


  
    

 
  return (
    <Helmet title='Shop'>
    <CommonSection  title="Products"/>

   <section>
    <Container>
      <Row>
        <Col lg="3" md="6">
          <div className='filter__widget '>
            <select onChange={handleFilter}>
              <option>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>


          </div>
        </Col>
        <Col lg="3" md="6">
        <div className='filter__widget text-end'>
               
              <select onChange={handleSort}>
              <option >Sort By </option>
              <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
            
            </select>
                
          
            


          </div>
        </Col>
        <Col lg="6" md="12">
          <div className='search__box'>
            <input type="text" placeholder='search...' onChange={handleSearch}/>
            <span>search</span>

          </div>
        </Col>

      </Row>
    </Container>

   </section>
   <section className='pt-0'>
    <Container>
      <Row>
        {
          productsDetails.length === 0 ? <h1 className='text-center fs-4'>No product are Found</h1> :(<ProductLIst data={productsDetails}/>)
        }
      </Row>
    </Container>
   </section>
    

  </Helmet>

  ) 
}

export default Shop