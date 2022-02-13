import React from "react";
import { useEffect, useState } from "react";

function ItemDetail({itemId}) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/productos')
        .then(response => response.json())
        .then(data => {setItem(data.find(item => item.id === itemId))});

}, [itemId]);

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.precio}</p>
            <img src={item.imagen} alt={item.name}/>
            <p>Stock{item.stock}</p>
            <form action="">
                <label htmlFor="">elige la cantidad</label>
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <br/>
                    <button type="submit">Agregar al carrito</button>
                </select>
            </form>

        </div>
    );
}

export default ItemDetail;