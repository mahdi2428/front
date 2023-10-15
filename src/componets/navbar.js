import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import img from "../img/en.png"
import { useState } from "react";
import Cart from "./Cart";
import {useSelector } from "react-redux";
export default function Navbar(){
    const[open,setOpen] = useState(false)
    const products1 = useSelector(state=>state.cart.products)
    const num = products1.length

    return(
        
        <>
        <div className="flex justify-between mx-4 mt-3 items-center align-center">
            <div >
                <ul className=" flex gap-5">
                    <li className="flex items-center">
                        <img className="h-[18px]" src={img} /><KeyboardArrowDownIcon />
                    </li>
                    <li><p>USD <KeyboardArrowDownIcon /></p></li>
                    <li><Link to="/product/1">Men</Link></li>
                    <li><Link to="/product/2">Women</Link></li>
                    <li><Link to="/product/3">childern</Link></li>
                    <li><Link to="/product/4">Accessories</Link></li>
                </ul>
            </div>
            <div><p className="text-2xl font-semibold"><Link to="/">LAMASTORE</Link></p></div>
            <div>
                <ul className="flex gap-5 ">
                    <li><Link to='/'>Homepage</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/'>Stores</Link></li>
                    <li className="text-gray-500 cursor-pointer"><PersonOutlinedIcon/></li>
                    <li className="text-gray-500 cursor-pointer"><FavoriteBorderOutlinedIcon/></li>
                    <li className="text-gray-500 cursor-pointer">
                        <ShoppingCartOutlinedIcon className="relative" onClick={()=>setOpen(!open)}/>
                        <div className="absolute right-3 bg-white">
                            {open && (
                                <div>
                                    <Cart />
                                </div>
                                )}
                            </div>    
                        <sapn className=" bg-blue-500 text-white rounded-[50%] w-[24px] h-[24px] flex justify-center  absolute top-1 right-2">{num}</sapn>
                        
                    </li>
                </ul>
            </div>
            
        </div>

        </>
    )
}