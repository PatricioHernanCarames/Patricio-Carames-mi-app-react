import React from 'react';

import Producto from './Producto';


function ItemListContainer(props ){
    const {productos, onAdd, onRemove } = props;

    return(
    <main className='block col-2'>
        <h2>Productos</h2>
        <div className="row">
            {productos.map((producto)=>(
               <Producto key={producto.id} producto={producto} onAdd={onAdd} onRemove={onRemove}/>
            ))}
            
            
            
             </div>
                 
    </main>); 
}

export default ItemListContainer;