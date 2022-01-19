import React from 'react'; 

function Header(){
    return( <header className='row block center'>
        <div>
            <a href="#/">   
            <h1>Carrito de compras</ h1>
            </a>
            
        </div>
        <div>
                <a href="#/cart">Carrito</a> 
                <a href="#/signIn">Login</a>
                        
        </div>
    </header>
)}
export default Header;