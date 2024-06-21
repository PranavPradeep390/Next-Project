import React from 'react'
import ProductId from '../../page'

type paramsType = {params:{productid:string ,reviewId:string}}
function reviewId({params}: paramsType ) {
   const {reviewId,productid} = params
  return (
    <div><p>reviewId : {reviewId}</p>
    <p>productId : {productid}</p>
    </div>
  )
}

export default reviewId