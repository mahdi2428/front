import React from "react";
import Card from "./card";
import Product from "../pages/product";
import { useAuth } from "../context/AuthContext";
import Products from "../pages/products";
import useFecht from "../hooks/useFecht";
export default function Layout({ catId,maxPrice , sort , subCats }){
    
    const data= useFecht(`http://localhost:1337/api/products?populate=*&[filters][categories][id]=${catId}${subCats.map((item)=> `&[filters][subcategories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)

    return(
        
        <>
        <div className="flex">
        {data?.map(item =>(
        <Card item={item} key={item.id} />   
        ))}
        
        </div>
        </>
    )
}