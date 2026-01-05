import React from 'react'
import SingleDessertCard from './SingleDessertCard'
import {desserts} from '../data'

function AllDesserts() {
    return(
        <div className="py-2 px-2">
            {/* <h1 className="p-5 text-[50px] font-semibold">Desserts</h1> */}
            <div className="flex flex-wrap">
            {desserts.map((dessert)=>{
                return <SingleDessertCard key={dessert.id} {...dessert}  />
            })}
            </div>
        </div>
    )
    
}
export default AllDesserts