import React, { useState } from "react";
import Navbar from "../componets/navbar";
import Footer from "../componets/footer";
import {useParams}  from "react-router-dom";
import Layout from "../componets/layout";
import useFecht from "../hooks/useFecht";


const Products=()=>{
    const catId =parseInt(useParams().id);
    const[maxPrice,setMaxprice]=useState(1000);
    const[sort,setSort]=useState(null);
    const[selectedSubcat , setSelectedSubcat]=useState([])
    
    
    const data= useFecht(`http://localhost:1337/api/subcategories?[filters][categories][id][$eq]=${catId}`)
    // console.log(data)
    const handlechanger = (e) =>{
        const value = e.target.value
        const isChecked = e.target.checked
        setSelectedSubcat(isChecked 
            ? [...selectedSubcat , value]
            : selectedSubcat.filter((item) => item !== value))
            console.log(selectedSubcat)
    }
    return(
        <div>
            <Navbar />
            <div className="flex justify-between  gap-4 pr-[150px]">
            <div className="flex  flex-col sticky top-[50px] h-[100%] left-5 gap-2  h-full ">
                <div className="py-2 ">
                    <p className="text-lg font-bold">Product Categories</p>
                   {data?.map(item=>(
                    <div key={item.id} className="flex items-center align-center">
                        <input  type="checkbox" id={item.id} value={item.id} onChange={handlechanger}/>
                        <label htmlFor={item.id} className="p-1 text-sm text-gray-500">{item.attributes.title}</label>
                    </div>
                   ))} 
                </div>
                <div>
                    <p  className="text-lg font-bold">Fliter by price</p>
                    <div className="flex pr-4">
                        <span>0</span>
                        <input className="mx-1 " type="range" min={0} max={1000} onChange={(e)=>setMaxprice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div>
                    <p  className="text-lg font-bold">Sort by</p>
                    <div className="flex items-center align-center ">
                        <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")} />
                        <label htmlFor="asc " className="pl-2 text-sm text-gray-500"  >price(lowest first )</label>
                    </div>
                    <div className="flex items-center align-center ">
                        <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")} />
                        <label htmlFor="desc"  className="pl-2 text-sm text-gray-500">price(Highest first )</label>
                    </div>
                </div>
            </div>
            <div className="pt-8">
                <img className=" h-96 w-[1500px] object-cover" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                <div className=" pt-8 pb-8">
                
                </div>
                <div className="flex">
                    <Layout catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubcat} />
                </div>
            </div>  

            </div>
           
            <Footer />
        </div>
    )
}
export default Products