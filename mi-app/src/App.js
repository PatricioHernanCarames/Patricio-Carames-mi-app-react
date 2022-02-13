import ItemListContainer  from './components/itemListContainer';
import Cart from './components/Cart';
import Nav from './components/Nav';
import { getDatos } from './datos';
import { useState, useEffect } from 'react';
import ItemDetail from './components/ItemDetail';

 

export default function App() { 

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    
    getDatos()
    .then((data) => setProductos(data))
    .catch((error) => console.log(error));

  }, [])
  
  
  
  
  const [CartItems, setCartItems] = useState([]);
  const onAdd = (producto)=>{
    const exist = CartItems.find(x=>x.id===producto.id);
    if(exist){
      setCartItems(CartItems.map(x=>x.id===producto.id?{...exist,cantidad:exist.cantidad+1}:x));
    }else{
      setCartItems([...CartItems,{...producto,cantidad:1}]);

    }
  }
  const onRemove = (producto)=>{
    const exist = CartItems.find(x=>x.id===producto.id);
    if(exist.cantidad===1){
      setCartItems(CartItems.filter(x=>x.id!==producto.id));
      
    }else{
      setCartItems(CartItems.map(x=>x.id===producto.id?{...exist,cantidad:exist.cantidad-1}:x));
    }
  }

  return (
    <div className="App">
      <Nav countCartItems={CartItems.length} />
      <div className='row'>

        
        
        <ItemListContainer onAdd={onAdd} onRemove={onRemove} productos={productos} />
        <Cart onAdd={onAdd}onRemove={onRemove} CartItems={CartItems} />

      </div>

      <div>
        <ItemDetail key={productos.id} producto={productos} />
      </div>
      
          
    </div>
  );
}
