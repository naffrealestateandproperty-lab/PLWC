import React, { useContext } from 'react'
import cartImg from "../assets/images/icon-add-to-cart.svg"
import { CartContext } from "../Context/CartContext"
import decrement from "../assets/images/icon-decrement-quantity.svg"
import increment from "../assets/images/icon-increment-quantity.svg"

export default function SingleDessertCard({id, img, title, description, price}) {
    const {cart,addToCart, handleIncrease, handleDecrease} = useContext(CartContext)
    const itemInCart = cart.find((item)=> item.id === id )
    const quantity = itemInCart?.quantity || 0
  return (
    <div className="p-5 bg-gray-50">
       <div className="relative">
        { itemInCart ? 
         <img className="rounded-lg w-full lg:w-[250px] border-2 border-rose-500" src={img} alt="" /> :
         <img className="rounded-lg w-full lg:w-[250px]" src={img} alt="" /> }
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px]">
           { itemInCart ? 
           <div className="flex items-center justify-between gap-2 border rounded-3xl py-2 px-4 text-lg bg-rose-500 text-white shadow-lg">
            <button onClick={()=> handleDecrease(itemInCart)} className="border flex justify-center items-center rounded-full h-5 w-5"><img src={decrement} alt="" /></button>
            <span> {quantity} </span>
            <button onClick={()=> handleIncrease(itemInCart)} className="border flex justify-center items-center rounded-full h-5 w-5"><img src={increment} alt="" /></button>
           </div> :  
           <button onClick={()=> addToCart({id,img,title,price,description})} className="flex bg-gray-50 items-center gap-2 border px-3 rounded-3xl h-10 shadow-lg"><img src={cartImg} alt="" /> Add to cart</button>}
        </div>
        <p className="mt-8 text-xl">{title}</p>
        <p className="text-xl font-semibold text-dark">{description}</p>
        <p className="text-2xl">{price.toFixed(2)}</p>
       </div>
    </div>
  )
}