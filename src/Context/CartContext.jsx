import {createContext, useState, useEffect} from "react"
import {toast} from "react-toastify"
export const CartContext = createContext()


const getCartFromStorage = JSON.parse(localStorage.getItem("cart")) || []

const CartProvider = ({children})=>{
    const [cart,setCart] = useState(getCartFromStorage)

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    }, [cart])

    const addToCart = (item)=>{
        const exists = cart.find((cartItem)=> cartItem.id === item.id);
        console.log(cart);
        
        if (exists) {
            toast.info(`${item.title} is already in the cart`)
        }else{
            setCart([...cart, {...item, quantity : 1}])
        }
    }
    const handleIncrease=(item)=>{
        const updatedCart = cart.map((cartItem)=> cartItem.id === item.id ? {...cartItem, quantity : cartItem.quantity + 1} : cartItem);
        setCart(updatedCart);
        toast.success(`increased quantity of ${item.title} in cart`)
    }
    const handleDecrease=(item)=>{
        const updatedCart = cart.map((cartItem)=> cartItem.id === item.id ? {...cartItem, quantity : cartItem.quantity - 1} : cartItem).filter((cartItem)=> cartItem.quantity > 0); 
        setCart(updatedCart);
        toast.success(`decreased quantity of ${item.title} in cart`)
    }
    const removeItemFromCart = (item)=>{
        const updatedCart = cart.filter((cartItem)=> cartItem.id !== item.id);
        setCart(updatedCart);
        toast.error(`${item.title} removed from cart`)
    }
    const totalItems = cart.reduce((total, cartItem)=>{
        return total + cartItem.quantity
    }, 0);
    const totalPrice = cart.reduce((total, cartItem)=>{
        return total + cartItem.price * cartItem.quantity;
    }, 0);
    const ConfirmOrderModal = ((total, cartItem)=> {
        return totalPrice + cartItem.price;
    }, 0);
    return <CartContext.Provider value={{cart,setCart,addToCart, handleDecrease, handleIncrease, removeItemFromCart, totalItems, totalPrice, ConfirmOrderModal}}>
        {children}
    </CartContext.Provider>
}
export default CartProvider