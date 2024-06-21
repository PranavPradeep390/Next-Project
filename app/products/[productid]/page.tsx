
type paramsType = {params:{productid:string}}
 
import React from 'react'

function ProductId({params}:paramsType) {
    console.log(params);

    const id:number = parseInt(params)
    
  return (
    <div>ProductId : {params.productid}</div>
  )
}

export default ProductId