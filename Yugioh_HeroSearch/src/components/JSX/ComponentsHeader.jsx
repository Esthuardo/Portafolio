import React from 'react'
import { Link } from 'react-router-dom'
const ComponentsHeader = ({headerImages}) => {
    let headerElements =[]
    for (const key in headerImages) {
        const [imagen,nombre]=headerImages[key]
        headerElements.push(
            <li key={key} className="w-[8.125rem] h-[75px] flex flex-col items-center group justify-center">
                <Link>{nombre}
                <img className="w-signal h-0 group-hover:h-[3.125rem]" src={imagen} alt=""></img>
                </Link>
            </li>
        )
    }
    return (
        <>
        <ul className="grid grid-cols-7 items-center segmentosHero">
            {headerElements}
        </ul>
        </>
    )
}

export default ComponentsHeader