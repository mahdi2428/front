import { Facebook, Google, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";

export default function Contact(){
    return(
        <>
        <div className="flex align-center bg-blue-500 justify-evenly py-6">
            <p className="text-white">
                BE IN TOUCH WITH US
            </p>
            <div>
            <input className="text-gray-500 focus:outline-none rounded-l-md  text-sm p-2 " type="email" placeholder="Enter your e-mail" />
            <button className="bg-gray-700 text-sm rounded-r-md p-2 text-white ">JOIN US</button>
            </div>
            <div className="text-white flex gap-2 cursor-pointer">
                <Facebook />
                <Instagram />
                <Twitter />
                <Google />
                <Pinterest />
            </div>
        </div>
        </>
    )

}