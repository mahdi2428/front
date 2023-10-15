import { DeleteOutline } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removerItem, resetCart } from "../redux/cartReducer";

export default function Cart(){
    const products = useSelector(state=>state.cart.products)
     const dispacht = useDispatch()
    const totalprice = () => {
        let total = 0;
        products.forEach((item) => (total+= item.quantity*item.price));
        return total.toFixed(2)
        };
    
    return(
        
        <>
        <div className="px-8 border py-5">
            <div className="pb-2  text-xl font-bold"><p>Products in your cart</p></div>
            {products?.map((item)=>(
                <div className="flex gap-2  w-80 relative" key={item.id}> 
                <img className="h-32 m-1 " src={"http://localhost:1337"+item.img} />
                <div>
                <div><p className="text-xl font-semibold">{item.title}</p></div>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="text-blue-600">{item.quantity} x ${item.price}</div>
                <div className="text-red-700 flex text-sm items-center justify-end absolute top-[80%] right-1 " onClick={()=>dispacht(removerItem(item.id))}>
                <DeleteOutline /> remov
                </div>
                </div>
                </div>
               
            ))} 
            <div className=" w-80">
            <div className="flex justify-between py-2">
                <p>SUBTOTAL:</p>
                <p>${totalprice()}</p>
            </div>
                <div className="flex flex-col gap-5 items-start w-48 mt-1">
                    <button className=" bg-blue-600 text-white text-sm py-1 px-2">PROCEED TO CHECKOUT</button>
                    <button className="text-xs text-red-700" onClick={()=>dispacht(resetCart())}>Reset Cart</button>
                </div>
            </div>
        </div>
        </>
    );
}