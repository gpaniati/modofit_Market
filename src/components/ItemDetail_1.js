import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import useCartContext from "../context/cart/useCartContext";

function ItemDetail({ producto }) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { addToCart } = useCartContext();

  function handleOnAdd(cantidad) {
    setCantidadAgregada(cantidad);
    addToCart(producto, cantidad);
  }

  return (
    <div>
      <Card className="carta" border="success" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
          {cantidadAgregada > 0 ? (
            <Button as={Link} to="/cart" variant="success" size="md">
              Finalizar Compra
            </Button>
          ) : (
            <ItemCount inicial={1} stock={5} onAdd={handleOnAdd} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default ItemDetail;
