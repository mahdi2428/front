import { Link } from "react-router-dom";
import React from "react";
import useFecht from "../hooks/useFecht";

export default function Card({item}){
    

    const data = useFecht("http://localhost:1337/api/products?populate=*")

    return(
        <>
        <div className="no-underline">
            <Link to={`/products/`}>
            {data && data.map(Products => (
                <div>
                <div className="w-[280px] flex flex-col">
                    <div className=" w-full h-[400px] overflow-hidden relative"  >
                    {"http://localhost:1337"+Products.attributes.img.data != null && <img className="w-full h-full object-cover absolute z-10 hover:z-0" src={"http://localhost:1337"+Products.attributes.img.data.attributes.url}/>}
                    <img className="w-full h-full object-cover absolute hover:z-10" src={"http://localhost:1337"+Products.attributes.img2.data.attributes.url}/>
                    </div>
                    {Products.attributes.isNew && <span className="border p-1 bg-white text-sm text-blue-500 absolute z-30 m-2">New Season</span>}
                    <div><p className="text-black font-bold">{Products.attributes.title}</p></div>
                    <div className="text-black"><p className="text-sm my-2">{Products.attributes.decr}</p></div>
                    <div className="flex gap-5">
                    <p className="font-semibold line-through">{Products.attributes.oldprice}</p><span className="font-semibold">{Products.attributes.price}</span>
                    </div>
                    </div>
                </div>
            ))}
            </Link>
        </div>
        </>
    )
}