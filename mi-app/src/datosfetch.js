import { useEffect, useState } from "react";

function Datos() {
  const URL = "http://localhost:3001/productos";

  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = "http://localhost:3001/productos";

    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProducto(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

    //asyinc await
    /* const getDatos = async ()=>{
        
        const response=await fetch(URL);

        const json= await response.json();
        console.log(json);
        };

        getDatos();*/
  }, []);

  const createProducto = () => {
    const newProducto = {
      nombre: "Saco",
      precio: 5000,
      descripción: "Saco de corte Italiano",
      imagen:
        "https://www.saco.com/wp-content/uploads/2019/01/saco-corte-italiano-1.jpg",
      stock: 10,
    };

    fetch(URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ newProducto }),
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <div>
        <h1>Productos</h1>

        <button onClick={createProducto}>Create Producto</button>
        <ul>

          {producto.map((producto) => (
            <li key={producto.nombre}>{producto.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Datos;
