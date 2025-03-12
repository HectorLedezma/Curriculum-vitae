import React from "react";

import ucen from '../assets/Logo UCEN_R.COQUIMBO-01.png'
import ucen_malla from '../assets/malla.png'

function Education(){
    return(
        <div>
            <div className="box">
                <div className="box-content">
                    <p> 
                        Ingenieria civli en computación e informática <br />
                        Universidad Central, sede La Serena, Región Coquimbo <br />
                        Ingresado en abril del 2019 - egresado en julio del 2024
                    </p>
                </div>
                <div className="box-content">
                    <div className="box-image-content">
                        <img className="image-content" src={ucen} alt="logo1" />
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <div className="box-image-content">
                        <img className="image-content-not-res" src={ucen_malla} alt="logo2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;