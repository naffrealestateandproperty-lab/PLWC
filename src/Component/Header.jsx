import React, {useState, useContext} from 'react'
import { Link } from 'react-router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from '../Context/AuthContext';
import { IoIosClose } from 'react-icons/io';

export default function Header(){
    const [ menuOpen, setMenuOpen] = useState(false)
    const {user,signOut} = useContext(AuthContext)

    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
    }
    return(
        <div>
            <nav className='container mx-auto flex justify-between items-center px-5'>
                <Link>
                <span className='font-bold text-3xl'>Desserts</span>
                </Link>

                <div className='hidden lg:flex gap-5'>
                    {user ? <>
                <div className='flex gap-3'>
                    <img className='w-10 h-10 rounded-full border-red-900' src={user?.image || "https://pngtree.com/free-png-vectors/avatar"} alt="" />
                    <button className='font-medium bg-red-900 text-white px-3 py-2 rounded-md' onClick={signOut}>Log out</button>
                </div>
                </> : <>
                    <Link to="/signin"><button className='bg-red-500 py-2 w-20 rounded-md txt-white hover:bg-red-900'>Sign in</button></Link>
                    <Link to="/signup"><button className='bg-red-500 py-2 w-20 rounded-md txt-white hover:bg-red-900'>Sign up</button></Link>
                </>}
                    
                </div>
                <div className='lg:hidden'>
                { user ? <>
                <div className='flex gap-3'>
                    <img className='w-10 h-10 rounded-full border-red-900' src={user?.image || "https://pngtree.com/free-png-vectors/avatar"} alt="" />
                    <button className='font-medium bg-red-900 text-white px-3 py-2 rounded-md' onClick={signOut}>Log out</button>
                </div>
                </> : <>
                <button onClick={toggleMenu}>{menuOpen ? <IoCloseSharp size={30} /> : <GiHamburgerMenu />}</button>
                </>}
                </div>
                { menuOpen && (
                    <div className='fixed top-0 left-0 w-full max-h-[70vh] bg-rose-600 py-6 px-6 bg-opacity-95 lg:hidden z-50'>
                        <div className='flex justify-end mb-4'>
                        <button><IoCloseSharp size={30} /></button>
                        </div>
                        <nav className='flex flex-col gap-4'>
                             <Link to="/signin"><button className='bg-red-500 py-2 w-20 rounded-md txt-white hover:bg-red-900'>Sign in</button></Link>
                    <Link to="/signup"><button className='bg-red-500 py-2 w-20 rounded-md txt-white hover:bg-red-900'>Sign up</button></Link>
                        </nav>
                    </div>
                )}

            </nav>
        </div>
    )
}