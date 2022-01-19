import React from 'react';

function Producto(props) {
    
  const {producto, onAdd} = props;

  return(
  
  <div>
      <img className='small' src={producto.imagen} alt={producto.nombre}/>
        
        <h3>{producto.nombre}</h3>
        
        <div>{producto.precio}</div>
        
        <div>
            <button onClick={()=>onAdd(producto)}>Agregar al carrito</button>
        </div>
        
  </div>
  );
}

export default Producto;

