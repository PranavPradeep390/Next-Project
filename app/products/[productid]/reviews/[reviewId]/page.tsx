import React from 'react'
import ProductId from '../../page'
import { notFound } from 'next/navigation'

type paramsType = {params:{productid:string ,reviewId:string}}
function reviewId({params}: paramsType ) {
   const {reviewId,productid} = params

   if(parseInt(reviewId)>1000) notFound()


  return (
    <div><p>reviewId : {reviewId}</p>
    <p>productId : {productid}</p>
    </div>
  )
}

export default reviewId