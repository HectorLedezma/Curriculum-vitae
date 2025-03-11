import React from "react";
import '../css/index.css'
import image from '../assets/profile.png'
import { Outlet } from "react-router";

function Index({children}){

    //const location = useLocation();

    const locate = ()=>{
        //location.pathname = '/holas'
        console.log('locating...')
    }

    return (
        <div className="main">
            <div id="encabezado" className="header">
                <div className="title">
                    <div className="nombre">
                        <h1 >Hector Sebastian Ledezma Rodriguez</h1>
                    </div>
                    <h2 className="carrera">Ingeniero civil en computación e informática</h2>
                </div>
                <img src={image} alt="profile img"/>
            </div>
            <div className="menu">
                <nav>
                    <div className="menu-item"
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                locate();
                            }
                        }
                    >Perfil</div>
                    <div className="menu-item">Educación</div>
                    <div className="menu-item">Experiencia</div>
                    <div className="menu-item">Contacto</div>
                    <div className="menu-item">Enlaces</div>
                    <div className="menu-item">Otros datos</div>
                </nav>
            </div>
            <div>
                {children}
            </div>
            <Outlet/>
        </div>
    )
}

export default Index;