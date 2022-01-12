import "./navbar.css";
import merc from "./mercado.png";

function Navbar(){

const estiloDelNavbar = {}

    return(
        <div className="navbar">            

            <nav style={estiloDelNavbar}>

            <img className="img" src={merc} alt="logo-mi-app" className="logo-mi-app"/>

            <input class="buscador" type="text" placeholder="Buscar producto" className="input-buscar"/>
                <ul>
                    <li>Usuario</li>
                    <li>Favoritos</li>
                    <li>Notificaciones</li>                
                </ul>
            </nav>
        </div>
    );
}

export default Navbar; 