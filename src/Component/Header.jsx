import React from 'react'
import { Link } from 'react-router'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header(){
    return(
        <div>
            <nav className='container mx-auto flex justify-between items-center px-5'>
                <Link>
                <span className='font-bold text-3xl'>Desserts</span>
                </Link>

                <div className='hidden lg:flex gap-5'>
                    <Link to="/signin"><button className='bg-red-500 py-2 w-20 rounded-md txt-white hover:bg-red-900'>Sign in</button></Link>
                    <Link to="/signup"><button className='bg-red-500 py-2 w-20 rounded-md txt-white hover:bg-red-900'>Sign up</button></Link>
                </div>
                <div className='lg:hidden'>
                    <button><GiHamburgerMenu/></button>
                </div>

            </nav>
        </div>
    )
}