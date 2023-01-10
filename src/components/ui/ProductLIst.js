import React from 'react'
import ProductCard from './ProductCard'

function ProductLIst({data}) {
  return <>
  {
    data?.map((item, index)=>(
      <ProductCard item={item} key={index}/>

    ))
  }
 

  </>
}

export default ProductLIst