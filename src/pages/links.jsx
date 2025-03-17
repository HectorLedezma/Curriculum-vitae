import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Links(){
    return(
        <div>
            <div className="box">
                <div className="box-content">
                    <div>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <p style={{display:"flex", fontWeight:"bold", marginRight:".5em"}}> 
                                <GitHubIcon/> GitHub:
                            </p><a href="https://github.com/HectorLedezma">https://github.com/HectorLedezma</a>
                        </div>
                        <div style={{display:"flex",alignItems:"start"}}>
                            <p style={{display:"flex", fontWeight:"bold", marginRight:".5em",marginTop:"0px",marginBottom:"0px"}}> 
                                <LinkedInIcon/> LinkedIn:
                            </p><a href="https://www.linkedin.com/in/hector-ledezma-rodriguez-b858b5229">https://www.linkedin.com/in/hector-ledezma-rodriguez-b858b5229</a>
                        </div>
                    </div>
                </div>
                <div className="box-content">
                    <div className="box-image-content">
                        <a style={{width:"100%", marginRight:"1.5em"}} href="https://www.linkedin.com/in/hector-ledezma-rodriguez-b858b5229">
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="logo2" />
                        </a>
                        <a style={{width:"100%", marginRight:"1.5em"}} href="https://github.com/HectorLedezma">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="logo1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links;