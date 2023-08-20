import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/cart/CartContext/CartContext";
import "../ItemDetail/ItemDetail.css";

function ItemDetail({ producto }) {

  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { addToCart } = useContext(CartContext);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    setStock(producto.stock);
  },[producto.stock]);

  function handleOnAdd(contador) {
    setCantidadAgregada(contador);
    addToCart(producto, contador);
    setStock(stock - contador);
  }

  return (
    <div>
      <Card className="carta" border="success" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          {stock === 0? (
            <Card.Text className="sinStock">Sin Stock</Card.Text>
          ) : (
            <Card.Text>Stock disponible: {stock}</Card.Text>
          )}
          <Card.Text className="precio">${producto.precio}</Card.Text>
          {((cantidadAgregada > 0) || (stock === 0)) ? (
            <Button as={Link} to="/" variant="success" size="md">
              SEGUI COMPRANDO
            </Button>
          ) : (
            <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default ItemDetail;