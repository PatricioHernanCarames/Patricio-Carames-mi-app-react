import React from 'react'; 

function Header(props){

    const {countCartItems} = props;

    return( <header className='row block center'>
        <div>
            <a href="#/">   
            <h1>Carrito de compras</ h1>
            </a>
            <p>Envio gratis a partir de $3000</p>
            
        </div>
        <div>
                <a href="#/cart">
                    
                    Carrito { ' '}
                               
                    
                    
                    {countCartItems? (<button className ="insignia">{countCartItems}</button>) : ('')}


                    
                    
                    </a>{''}
                
                <a href="#/signIn">Login</a>
                        
        </div>
    </header>
)}
export default Header;