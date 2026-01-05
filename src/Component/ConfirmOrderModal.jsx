
import React, {useContext} from 'react'
import confirm from "../assets/images/icon-order-confirmed.svg"
import { CartContext } from "../Context/CartContext"


function ConfirmOrderModal({showModal, setShowModal}) {
  const {cart, totalPrice, setCart} = useContext(CartContext)
  if (!showModal) return null;

  const closeModal = ()=>{
    setShowModal(false)
    setCart([])
  }

    return(
      <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
        <div className='bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6'>
        <img src={confirm} alt="" />
        <h1 className='text-[34px] font-semibold'>order confirmed</h1>
        <p className='mb-4'>we hope you enjoy your food</p>
        

        <div className='divide-y'>
          {cart.map((item)=>{
            return <div className='flex justify-between items-center py-3 px-4 bg-gray-200' key={item.id}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <img className="w-[60px]" src={item.img} alt="" />
                  <div className="flex flex-col">
                    <p>{item.description}</p>
                    <div className="flex items-center gap-2">
                      <p>{item.description}x</p>
                      <p>@ ${totalPrice.toFixed(2)}</p>

                    </div>
                    

                    </div>

                  </div>
                  <p>${item.price.toFixed(2)}</p>
                  </div>
              </div>
          })}
        </div>

        <div className='flex justify-between items-center text-lg font-bold mt-4'>
          <span>order total</span>
           <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button onClick={closeModal} className='bg-rose-500 hover:bg-rose-600 text-white w-full py-3 rounded-3xl mt-6 transition'>start a new order</button>
        </div>
        
        
        
      </div>
   
  );
}
export default ConfirmOrderModal