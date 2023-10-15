import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/payment.png"

export default function Footer(){
    return(
        <>
        <div className="flex justify-between mx-5">
            <div>
                <ul>
                    <li className="text-xl font-bold text-gray-600"><Link>Categories</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Women</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Men</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Shoes</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Accessories</Link></li>
                    <li className="text-gray-400 text-sm"><Link>New Arrivals</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="text-xl font-bold text-gray-600"><Link>Links</Link></li>
                    <li className="text-gray-400 text-sm"><Link>FAQ</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Pages</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Stores</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Compare</Link></li>
                    <li className="text-gray-400 text-sm"><Link>Cookies</Link></li>
                </ul>    
            </div>
            <div>
                <ul>
                    <li className="text-xl font-bold text-gray-600">About</li>
                    <li className="w-[400px] text-gray-400 text-sm"><p>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy</p></li>
                </ul>
                </div>
            <div>
                <ul>
                    <li className="text-xl font-bold text-gray-600">Contact</li>
                    <li className="w-[400px] text-gray-400 text-sm"><p>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy</p></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between mx-4">
            <div className="flex items-center gap-3">
                <p className="text-2xl text-blue-600">Lamastore</p>
                <p className="text-xs text-gray-500">© Copyright 2023. All Rights Reserved</p>
            </div>
            
            <div><img className="h-[50px]" src={img1}/></div>
        </div>
        </>
    )
}