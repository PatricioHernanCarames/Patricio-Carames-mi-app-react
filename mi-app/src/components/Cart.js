import React from 'react';

function Cart(props){
    const {CartItems, onAdd, onRemove} = props;
    const precioItems = CartItems.reduce((acum,item)=>acum+item.precio*item.cantidad,0);
    const impuestoTotal = precioItems*0.21;
    const evnioTotal = precioItems>3000 ? 0 : 500;
    const total = precioItems+impuestoTotal+evnioTotal;




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

            {CartItems.length!==0 &&(
                <>
                <hr></hr>
                <div className='row'>
                    <div>Subtotal Items</div>
                    <div className='text-right'>${precioItems.toFixed(2)}</div>
                </div>

                <div className='row'>
                    <div>IVA</div>
                    <div className=' text-right'>${impuestoTotal.toFixed(2)}</div>
                </div>

                <div className='row'>
                    <div>Envio</div>
                    <div className='text-right'>${evnioTotal.toFixed(2)}</div>
                </div>

                <div className='row'>
                    <div>Monto total</div>
                    <div className='text-right'>${total.toFixed(2)}</div>
                </div>
                
                </>
            )}

    </aside>);
}
export default Cart;