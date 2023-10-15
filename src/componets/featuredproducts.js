import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import useFecht from "../hooks/useFecht";
import { Link } from "react-router-dom";
export default function Featuredproduct({type}){
  
    let data = useFecht(`http://localhost:1337/api/products?populate=*&filters[type][$eq]=${type}`)



    
    return(
        
        <>
        <div className="flex justify-around items-center">
            <h1 className="text-2xl font-bold">{type} Products</h1>
            <div className="text-gray-500 w-5/12">
                <p>French fashion house Hermes is the oldest luxury brand in the world still in operation today.
                    It was founded in 1837 by Thierry Hermes.
                    The designer originally produced saddles and other riding gear. The first unofficial Hermes bag designed in addition to riding equipment was designed to carry saddles. This was followed by the most successful and iconic products, the special Kelly and Birkin bags.
                </p>
            </div>
        </div>
        <div className="flex justify-center gap-4">
            {data && data.map(Products => (
                <Link to='/products/:id' >
                <div key={Products.attributes.id}>
                <div className="w-[280px] flex flex-col">
                    <div className=" w-full h-[400px] overflow-hidden relative"  >
                    <img className="w-full h-full object-cover absolute cursor-pointer z-10 hover:z-0" src={"http://localhost:1337"+Products?.attributes?.img?.data?.attributes?.url}/>
                    <img className="w-full h-full object-cover absolute cursor-pointer hover:z-20" src={"http://localhost:1337"+Products?.attributes?.img2?.data?.attributes?.url}/>
                    </div>
                    {Products.attributes.isNew && <span className="border p-1 bg-white text-sm text-blue-500 absolute z-30 m-2">New Season</span>}
                    <div><p className="text-black font-bold">{Products.attributes.title}</p></div>
                    <div className="text-black"><p className="text-sm my-2">{Products.attributes.decr}</p></div>
                    <div className="flex gap-5">
                    <p className="font-semibold line-through text-gray-400">${Products.attributes.oldprice}</p><span className="font-semibold">${Products.attributes.price}</span>
                    </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
        </>
    )
}