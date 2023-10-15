import React from "react";
import { Link } from "react-router-dom";

export default function Categories(){
    return(
        <>
        <div className="flex w-full h-[70vh] overflow-hidden gap-4 ">
            <div className="ml-10 flex flex-col gap-4">
                <div className=" overflow-hidden relative cursor-pointer group">
                    <Link to="/products/">
                    <img className="object-contain "src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
                    <button className="z-10 absolute bg-white top-[50%] left-[45%] text-xs py-2 px-3 group-hover:bg-blue-500 group-hover:text-white">SALE</button>
                    </Link>
                </div>
                <div className="relative group cursor-pointer" >
                <Link to="/products/">
                    <img className="h-[40vh] w-full"src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
                    <button className="z-10 absolute bg-white top-[50%] left-[45%] text-xs py-2 px-3 group-hover:bg-blue-500 group-hover:text-white">WOMEN</button>
                </Link>
                </div>
            </div>
                <div className="w-full h-full relative group cursor-pointer">
                <Link to="/products/">
                    <img className="h-full w-full" src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
                    <button className="z-10 absolute bg-white top-[50%] left-[45%] text-xs py-2 px-3 group-hover:bg-blue-500 group-hover:text-white">NEW SEASON</button>
                </Link>
                </div>
            <div className="flex flex-col gap-4 mr-10">
                <div className="flex h-[50%] gap-4" >
                    <div className=" overflow-hidden relative group cursor-pointer">
                    <Link to="/products/">
                        <img className="" src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                        <button className="z-10 absolute bg-white top-[50%] left-[45%] text-xs py-2 px-3 group-hover:bg-blue-500 group-hover:text-white">MEN</button>
                    </Link>
                    </div>
                    <div className=" overflow-hidden relative group cursor-pointer">
                    <Link to="/products/">
                        <img className="" src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
                        <button className="z-10 absolute bg-white top-[50%] left-[45%] text-xs py-2 px-3 group-hover:bg-blue-500 group-hover:text-white">ACCESSORIES</button>
                    </Link>
                    </div>
                </div>
                    <div className="relative group cursor-pointer">
                    <Link to="/products/">
                        <img className="w-full h-[50vh]" src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"alt=""/>
                        <button className="z-10 absolute bg-white top-[34%] left-[45%] text-xs py-2 px-3 group-hover:bg-blue-500 group-hover:text-white">SHOES</button>
                    </Link>
                    </div>
            </div>
        </div>
        </>
    )
}