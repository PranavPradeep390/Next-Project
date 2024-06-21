import { products } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
function Products() {
  return (
    <div>
      {products.map((product)=>(
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className='border bottom-1 mb-2'>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Products