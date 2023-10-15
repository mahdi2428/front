import  {React,useState } from "react";
import { EastOutlined, WestOutlined } from "@mui/icons-material";



export default function Slider(){
    const [currentSlide,setCurrentSlide]=useState(0)
    

    const prevslide = () =>{
        setCurrentSlide(currentSlide===0 ? 2 :(perv)=> perv-1)
    }
    const nextslide = () =>{
        setCurrentSlide(currentSlide===2 ? 0 :(perv)=> perv+1)
    }


    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
      
    return(
        <>
        <div className=" overflow-x-hidden">
            <div className="flex w-[300vw] relative ease duration-1000" style={{transform : `translateX(-${currentSlide*100}vw)`}}>
                <img className="object-cover object-fit h-screen w-full" src={data[0]} />
                <img className="object-cover object-fit h-screen w-full" src={data[1]} />
                <img className="object-cover object-fit h-screen w-full" src={data[2]} />
            </div>
            <div className="flex justify-center absolute left-[48%] top-[90%] gap-4">
                <div onClick={prevslide} className="border border-gray-400 p-[5px] cursor-pointer"><WestOutlined  /></div>
                <div onClick={nextslide} className="border border-gray-400 p-[5px] cursor-pointer"><EastOutlined  /></div>
            </div>
        </div>
        </>
    )
}