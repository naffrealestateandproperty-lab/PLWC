import Emptycarting from "../assets/images/illustration-empty-cart.svg"
import React, {useContext, useState} from 'react'
import { CartContext } from "../Context/CartContext"
import CartItem from "../Component/CartItem"
import Icon from "../assets/images/icon-carbon-neutral.svg"
import ConfirmOrderModal from "./ConfirmOrderModal"
export default function Cart() {
    const {cart, totalItems,totalPrice} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const confirmOrder = ()=>{
        setShowModal(true);
    }
    

    if (cart.length === 0 ) {
        return (
        <div className=" mx-auto container rounded-lg mt-4 py-8 px-4">
        <h2 className="text-xl font-bold text-rose-950">Your Cart (0)</h2>
        <div className="flex flex-col items-center pt-5">
            <img src={Emptycarting} alt="" />
            <p className="text-sm text-rose-900 pt-4">Your added item will appear here</p>
        </div>
    </div>
        )
    }
  return (
  <div className=" mx-auto container rounded-lg mt-4 py-8 px-4">
    {showModal && <ConfirmOrderModal showModal={showModal} setShowModal={setShowModal} />}
    <h2 className="text-xl font-bold text-rose-950">Your Cart ({totalItems}) </h2>
    {cart.map((dessert)=>{
        return <CartItem key={dessert.id} {...dessert} />
    })}
    <div className="flex items-center justify-between py-5">
        <p>Order Total</p>
        <p className="text-xl font-bold">${totalPrice}</p>
    </div>
    <div className="w-full bg-gray-100 rounded-md py-3">
        <div className="flex justify-center items-center gap-1">
        <img src={Icon} alt="" />
        <p className="text-xs">This is a <span className="font-semibold">Carbon-neutral</span> delivery</p>
        </div>
    </div>
    <button onClick={confirmOrder} className="w-full rounded-3xl bg-rose-500  rounded-3xl py-3 mt-3">Confirm Order</button>
    </div>
    )
}