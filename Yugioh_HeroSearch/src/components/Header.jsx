import React from "react"
import { Link } from "react-router-dom"
import {headerImages,headerLogo} from "../assets/headerImages"
import ComponentsHeader from "./JSX/ComponentsHeader.jsx"

const Header  = () =>{
 return(
    <>
    <header className="w-full flex justify-between items-center bg-purple-800">
        <Link to='/'><img className="h-16 ml-12" src={headerLogo.home} alt=""></img></Link>
        <nav className="text-white text-[10px]">
            <ComponentsHeader headerImages={headerImages}/>
        </nav>
        <div className="mr-12 mt-8 mb-8">
            <input type="text" placeholder="Buscar ..."/>
            <a href=""><img src="" alt="" /></a>
        </div>
    </header>
    </>
 )   
}

export default Header