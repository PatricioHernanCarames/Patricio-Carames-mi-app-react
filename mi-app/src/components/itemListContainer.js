import React from 'react';

import Producto from './Producto';
import {getDatos} from "../datos"
import { useState, useEffect } from 'react';


function ItemListContainer(props ){
    const { onAdd, onRemove } = props;
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    getDatos()
    .then((data) => setProductos(data))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));

  }, [])

    return(
    <main className='block col-2'>
        <h2>Productos</h2>
        <div className="row">
            
            {isLoading ? <p>Loading...</p>
            
            :
            
            productos.map((producto)=>(
               <Producto key={producto.id} producto={producto} onAdd={onAdd} onRemove={onRemove}/>
            ))}
            
            
            
             </div>
                 
    </main>); 
}

export default ItemListContainer;