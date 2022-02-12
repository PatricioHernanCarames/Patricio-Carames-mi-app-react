const Item = ({product}) => {

    const cardStyles = {border: "1px solid red", width:200}
    return (
        <div style= {cardStyles}>
            <img src={product.imagen} alt={product.name}/>
            <p>Item:{product.name}</p>
            <p>Precio:{product.precio}</p>

        </div>
    );

}

export default Item;