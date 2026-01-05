import React from 'react'
import Header from "../Component/Header"
import AllDesserts from '../Component/AllDesserts'
import Cart from "../Component/Cart"



export default function Homepage() {
 

  return (
    
    <div>
        <Header />
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

            <div className='lg:w-3/4 grid lg:gap-5'>
      <AllDesserts />
      </div>
      

      <div className='lg:w-1/4'>
      <Cart />
      </div>
      
      </div>
      </div>
     </div>

    
  )
}

