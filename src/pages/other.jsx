import React from "react";

function Other(){
    return(
        <div>
            <div className="box">
                <div className="box-content">
                    <div style={{
                        display:"flex"
                    }}  className='box-list'>
                        <p style={{fontWeight:"bold",marginRight:".5em"}}>
                            Manejo de Software de oficina:
                        </p>
                        <ul>
                            <li>Microsoft Office 365</li>
                            <li>Libre Office</li>
                            <li>Google Workspace</li>
                        </ul>
                    </div>
                </div>
                <div className="box-content">
                    <div className="box-image-content">
                        <img style={{margin:".2em", height:"100%"}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/1862px-Microsoft_365_%282022%29.svg.png" alt="logo1" />
                        <img style={{margin:".2em", height:"100%"}}  src="https://www.icons101.com/icon_png/size_512/id_77230/LibreOffice.png" alt="logo2" />
                        <img style={{margin:".2em", height:"100%"}} src="https://ltu.edu/wp-content/uploads/2024/11/Google-Drive-logo.png" alt="logo3" />
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <div className="box-image-content">
                        <img style={{margin:".2em", height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png" alt="logo1" />
                        <img style={{margin:".2em", height:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1776px-Apache_NetBeans_Logo.svg.png" alt="logo2" />
                        <img style={{margin:".2em", height:"100%"}} src="https://avatars.githubusercontent.com/u/33467679?s=280&v=4" alt="logo3" />
                    </div>
                </div>
                <div className="box-content">
                    <div style={{
                        display:"flex"
                    }}  className='box-list'>
                        <p style={{fontWeight:"bold",marginRight:".5em"}}>
                            Software de desarrollo:
                        </p>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Apache NetBeans</li>
                            <li>Google Colab</li>
                            <li>Docker</li>
                            <li>Power BI</li>
                            <li>Xampp</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <div style={{
                        display:"flex"
                    }}  className='box-list'>
                        <p style={{fontWeight:"bold",marginRight:".5em"}}>
                            Sistemas operativos:
                        </p>
                        <ul>
                            <li>Windows</li>
                            <li>Linux (basdo en debian)</li>
                        </ul>
                    </div>
                </div>
                <div className="box-content">
                    <div className="box-image-content">
                        <img style={{margin:".2em", height:"100%"}}  src="https://logodownload.org/wp-content/uploads/2016/03/windows-10-logo-2.png" alt="logo1" />
                        <img style={{margin:".2em", height:"100%"}}  src="https://cdn.worldvectorlogo.com/logos/linux-tux-1.svg" alt="logo2" />
                        <img style={{margin:".2em", height:"100%"}} src="https://static-00.iconduck.com/assets.00/debian-icon-2048x2048-xsxbqhf9.png" alt="logo3" />
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <div className="box-image-content">
                        <img style={{margin:".2em", height:"100%"}} src="https://cdn-icons-png.flaticon.com/512/2150/2150264.png" alt="logo1" />
                        <img style={{margin:".2em", height:"100%"}} src="https://png.pngtree.com/template/20190909/ourmid/pngtree-time-commitment-teamwork-together-black-logo-image_304499.jpg" alt="logo2" />
                    </div>
                </div>
                <div className="box-content">
                    <div style={{
                        display:"flex"
                    }}  className='box-list'>
                        <ul>
                            <li>
                                <p style={{fontWeight:"bold",marginRight:".5em"}}>
                                    Pretensiones de renta liquida mensual:
                                </p>
                                <p>$800.000 - $1.000.000 CLP</p>
                            </li>
                            <li>
                                <p style={{fontWeight:"bold",marginRight:".5em"}}>
                                    Disponibilidad para inicial:
                                </p>
                                <p>Lo mas pronto posible</p>
                            </li>
                            <li>
                                <p style={{fontWeight:"bold",marginRight:".5em"}}>
                                    Pretension de horario:
                                </p>
                                <p>Jornada Completa</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Other;