import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componets/navbar";
import Footer from "../componets/footer";
import Slider from "../componets/slider";
import Featuredproduct from "../componets/featuredproducts";
import Categories from "../componets/categories";
import Contact from "../componets/contact";
export default function Home(){
    return(
        <div className="flex flex-col gap-5">
            <Navbar />
            <Slider />
            <Featuredproduct type="featured"/>
            <Categories />
            <Featuredproduct type="tranding"/>
            <Contact />
            <Footer />
        </div>
    )
}