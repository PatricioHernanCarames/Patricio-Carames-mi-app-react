import React from 'react';

function Cart(props){
    const {CartItems, onAdd, onRemove} = props;
    return(
    <aside className='block col-1'>
        <h2>Elementos del Carrito</h2>
        <div>{CartItems.legth===0 && <div>El carrito está vacío</div>}</div>
        
        {CartItems.map((item)=>(
            
            <div key={item.id} className='row'>
            
            <div className='col-2 '>{item.nombre}</div>
            
            <div className='col-2'>
                
                <button onClick={()=>onAdd(item)} className='agregar'>+</button>
                <button onClick={()=>onRemove(item)} className='eliminar'>-</button>
            </div>
                <div className='col-2 text-right'>
                    {item.cantidad} x $ {item.precio.toFixed(2)}
                </div>
            </div>
            

            
        ))}
    </aside>)
}
export default Cart;