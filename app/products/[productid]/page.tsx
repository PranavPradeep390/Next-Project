
type paramsType = {params:{productid:string}}
 
import React from 'react'

function ProductId({params}:paramsType) {
    console.log(params);
    
  return (
    <div>ProductId :{params.productid}</div>
  )
}

export default ProductId