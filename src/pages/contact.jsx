import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Contact(){
    return(
        <div>
            <div className="box">
                <div className="box-content">
                    <div>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <p style={{display:"flex", fontWeight:"bold", marginRight:".5em"}}> 
                                <EmailIcon/> Correo electronico:
                            </p>hectors.ledezmar@gmail.com 
                        </div>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <p style={{display:"flex", fontWeight:"bold", marginRight:".5em"}}> 
                                <LocalPhoneIcon/> Teléfono:
                            </p>+56 9 9130 5695 
                        </div>
                    </div>
                </div>
                <div className="box-content">
                    <div className="box-image-content">
                        <img style={{width:"100%", marginRight:"1.5em"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" alt="logo1" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="logo2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;