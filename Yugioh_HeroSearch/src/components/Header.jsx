import React from "react"
import headerImages from "../assets/headerImages.js"

const Header  = () =>{
 return(
    <>
    <header className="w-full flex justify-between items-center bg-purple-800">
        <a href=""><img className="h-16 ml-12" src={headerImages.home} alt=""></img></a>
        <nav className="text-white text-[10px]">
            <ul className="grid grid-cols-7 items-center">
                <li className="w-[8.125rem] h-[75px] flex flex-col items-center group justify-center">
                    <a href="">Elemental Hero
                    <img className="w-signal h-0 group-hover:h-3.125rem" src={headerImages.EH} alt=""></img></a>
                </li>
                <li className="w-[130px] h-[75px] flex flex-col">
                    <a href="">Destiny Hero
                    <img className="w-signal h-signal" src={headerImages.DH} alt=""></img></a>
                </li>
                <li className="w-[130px] h-[75px] flex flex-col">
                    <a href="">Evil Hero
                    <img className="w-signal h-signal" src={headerImages.EvH} alt=""></img></a>
                </li>
                <li className="w-[130px] h-[75px] flex flex-col">
                    <a href="">Masked Hero
                    <img className="w-signal h-signal" src={headerImages.MH} alt=""></img></a>
                </li>
                <li className="w-[130px] h-[75px] flex flex-col">
                    <a href="">Vision Hero
                    <img className="w-signal h-signal" src={headerImages.VH} alt=""></img></a>
                </li>
                <li className="w-[130px] h-[75px] flex flex-col">
                    <a href="">Xtra Hero
                    <img className="w-signal h-signal" src={headerImages.XH} alt=""></img></a>
                </li>
                <li className="w-[130px] h-[75px] flex flex-col">
                    <a href="">Neo Spacians
                    <img className="w-signal h-signal" src={headerImages.NS} alt=""></img></a>
                </li>
            </ul>
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