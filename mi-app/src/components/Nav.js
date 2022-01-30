import React from 'react'; 
import { BsCart4 } from "react-icons/bs";

function Nav(props){

    const {countCartItems} = props;
    

    return( <nav className='row block center'>
        <div>
            <a href="#/">   
            <h1>Carrito de compras</ h1>
            </a>
            <p>Envio gratis a partir de $3000</p>
            
        </div>
        <div>
                <a href="#/cart">
                    
                    <BsCart4  /> { ' '}
                               
                    
                    
                    {countCartItems? (<button className ="insignia">{countCartItems}</button>) : ('')}


                    
                    
                    </a>{''}
                
                <a href="#/signIn">Login</a>
                        
        </div>
    </nav>
)}
export default Nav;