import React from "react";
import { useState } from "react";
import Navbar from "../componets/navbar";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFecht from "../hooks/useFecht";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
export default function Product(){
    const[showimg ,setShowimg ] = useState("img");
    const[quantity,setQuantity] = useState(1);

    const disPhatch=useDispatch()
    const here = useParams().id;
    const data= useFecht(`http://localhost:1337/api/products/${here}?populate=*`)
    
    return(
        <>
        <div>
            <Navbar />
        </div>
       
            <>
            
                <div className=" mt-10">

                {<><div className="flex" >
                    <div className="flex flex-col m-8 gap-8">
                        <img className="h-48 w-full object-cover" src={"http://localhost:1337"+data?.attributes?.img?.data?.attributes?.url} onClick={(e)=>setShowimg("img")} />
                        <img className="h-48 object-cover" src={"http://localhost:1337"+data?.attributes?.img2?.data?.attributes?.url} onClick={(e)=>setShowimg("img2")} />
                    </div>
                    <div className="pt-8 w-6/12">
                        <img className="h-6/12 object-cover" src={"http://localhost:1337"+data?.attributes[showimg].data?.attributes?.url}  />
                    </div>
                <div className="m-8 flex flex-col gap-8" >
                    <div className="font-bold text-2xl"><p>Long Sleeve Graphic T-shirt</p></div>
                    <div className="text-blue-400 text-xl font-semibold"><p>{data?.attributes.price} doller</p></div>
                    <div className="text-sm text-gray-500"><p>{data?.attributes?.decr}</p></div>
                    <div className="flex gap-3 items-center ">
                        <buttom className="bg-gray-300 py-2 px-[15px] cursor-pointer" onClick={()=> setQuantity(quantity===1 ? 1 : quantity-1 )}> - </buttom>
                        <span>{quantity}</span>
                        <button className="bg-gray-300 py-2 px-[14px] cursor-pointer" onClick={()=> setQuantity(quantity+1)}>+</button>
                    </div>
                    <div className=" text-white bg-blue-500 gap-6 flex justify-center cursor-pointer w-[240px]  py-2">
                        <AddShoppingCartOutlinedIcon />
                        <button className="text-sm " onClick={()=>disPhatch(addToCart({
                            id:data.id,
                            title:data.attributes.title,
                            decr:data.attributes.decr,
                            price : data.attributes.price,
                            img:data.attributes.img.data.attributes.url,
                            quantity,
                        }))}>
                            ADD TO CART
                        </button>
                    </div>
                    <div className="cursor-pointer text-xs flex items-center text-blue-500" >
                        <div className="flex items-center">
                        <FavoriteBorderOutlinedIcon /><span className="ml-[2px]" >ADD TO WISH LIST</span>
                        </div>
                        <div className="flex items-center ml-4">
                        <BalanceOutlinedIcon /> <span className="ml-[5px]">ADD TO COMPARE</span>
                        </div>
                    </div>
                    <div className="border-b pb-2 text-gray-400">
                        <p>Vender:PoloProduct<br/> Type:T-shirt <br/> Tag:T-shirt,Women,Top</p>
                    </div>
                    <div className="text-sm text-gray-500">
                        <div><Link className="border-b">DESCRIPTION</Link></div>
                        <div><Link className="border-b">ADDITIONAL INFORMATION</Link></div>
                        <div><Link className="border-b">FAQ</Link></div>
                    </div>
                </div>
                </div></>}
            </div>
            
            
        </>
        
        
        </>
    )
}