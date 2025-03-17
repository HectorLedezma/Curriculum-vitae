import React, { useEffect, useState } from "react";
import '../css/index.css'
import image from '../assets/profile.png'
import { Outlet, useNavigate, useLocation } from "react-router";

function Index({children}){
    const location = useLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const rutas = ['/','/person','/education','/xp','/contact','/links','/other','/test'];

    const [render,setRender] = useState(0);

    useEffect(()=>{
        let path = location.pathname;
        let index = rutas.indexOf(path);
        setRender(index);
    }, [location.pathname, rutas])

    

    const LoadClass = (state)=>{
        if (state === render) {
            //setRender(state)
            return 'selected';
        }else{
            return '';
        }
    }

    const navi = useNavigate();

    const Locate = (link,state) =>{
        setRender(state)
        navi(link)
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
                    <div className={"menu-item "+LoadClass(0)}
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                Locate('/',0)
                            }
                        }
                    >Perfil</div>
                    <div className={"menu-item "+LoadClass(1)}
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                Locate('/person',1)
                            }
                        }
                    >Datos personales</div>
                    <div className={"menu-item "+LoadClass(2)}
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                Locate('/education',2)
                            }
                        }
                    >Educación</div>
                    <div className={"menu-item "+LoadClass(3)}
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                Locate('/xp',3)
                            }
                        }
                    >Experiencia</div>
                    <div className={"menu-item "+LoadClass(4)}
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                Locate('/contact',4)
                            }
                        }
                    >Contacto</div>
                    <div className={"menu-item "+LoadClass(5)}
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                Locate('/links',5)
                            }
                        }
                    >Enlaces</div>
                    <div className={"menu-item "+LoadClass(6)}
                        onClick={
                            (ev)=>{
                                ev.preventDefault();
                                Locate('/other',6)
                            }
                        }
                    >Otros datos</div>
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