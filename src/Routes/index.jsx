import React from "react"
import { Route, Routes } from "react-router"
import Index from "../pages"
import Profile from "../pages/profile"
import Education from "../pages/education"
import Xp from "../pages/xperience"
import Contact from "../pages/contact"
import MySelf from "../pages/my-self"


function Rutas(){

    const page = (element,state) =>{
        return(
            <Index state={state}>
                {element}
            </Index>
        )
    }

    return(
        <Routes>
            <Route path='/' element={page(
                <Profile/>
            )}/>
            <Route path='/person' element={page(
                <MySelf/>
            )}/>
            <Route path='/education' element={page(
                <Education/>
            )}/>
            <Route path='/xp' element={page(
                <Xp/>
            )}/>
            <Route path='/contact' element={page(
                <Contact/>
            )}/>
            <Route path='/test' element={page(
                <h1>HOLAS XDDD</h1>
            )}/>
        </Routes>
    )
}

export default Rutas