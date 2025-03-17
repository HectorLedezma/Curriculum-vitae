import image from '../assets/profile.png'

function MySelf(){
    return (
        <div className="box">
            <div className="box-content">
                <div>
                    <div style={{
                        display:"flex"
                    }} className='box-list'>
                        <p style={{fontWeight:"bold",marginRight:".5em"}}>
                            Nombre:
                        </p>
                        <p> 
                            Hector Sebastian Ledezma Rodriguez
                        </p>
                    </div>
                    <div style={{
                        display:"flex"
                    }}  className='box-list'>
                        <p style={{fontWeight:"bold",marginRight:".5em"}}>
                            RUT:
                        </p>
                        <p> 
                            20.600.701-K
                        </p>
                    </div>
                    <div style={{
                        display:"flex"
                    }}  className='box-list'>
                        <p style={{fontWeight:"bold",marginRight:".5em"}}>
                            Fecha de nacimiento:
                        </p>
                        <p> 
                            12 de Febrero del año 2001
                        </p>
                    </div>
                    <div style={{
                        display:"flex"
                    }}  className='box-list'>
                        <p style={{fontWeight:"bold",marginRight:".5em"}}>
                            Residencia:
                        </p>
                        <ul>
                            <li>La Serena, Región de Coquimbo</li>
                            <li>Santiago de Chile, Región Metropolitana</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box-content">
                <div className="box-image-content">
                    <img className="image-content" src={image} alt="logo1" />
                </div>
            </div>
        </div>
    )
}

export default MySelf