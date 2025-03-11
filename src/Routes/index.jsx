import React from "react"
import { Route, Routes } from "react-router"
import Index from "../pages"


function Rutas(){

    const page = (element) =>{
        return(
            <Index>
                {element}
            </Index>
        )
    }

    return(
        <Routes>
            <Route path='/' element={page(
                <h1>HOLAS XDDD</h1>
            )}/>
            <Route path='/' element={page(
                <h1>HOLAS XDDD</h1>
            )}/>
        </Routes>
    )
}

export default Rutas