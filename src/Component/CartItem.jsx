import React, { useContext } from 'react'
import {useState} from "react"
import { IoCloseCircleOutline} from "react-icons/io5";
import { CartContext } from  '../Context/CartContext';

function CartItem({id, description,price,quantity,title}) {
    const {removeItemFromCart} = useContext(CartContext)
    
    return(
        <div>
            <div className='py-4 flex flex-row items-center justify-between border-b border-gray-300'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-md'>{description}</p>
                <div className='flex items-center gap-3 pt-2'>
                    <span className='font-bold text-rose-800'>{quantity}</span>
                    <div className='flex gap-3'>
                        <p>@ ${price}</p>
                        <p className='font-semibold'>@ ${price * quantity}</p>
                    </div>
                </div>
            </div>
           <button onClick={()=> removeItemFromCart({id,title,description,price})}>
            <span className='text-rose-900'><IoCloseCircleOutline size={23}  /></span></button>
        </div>
        </div>
    )
    
}
export default CartItem