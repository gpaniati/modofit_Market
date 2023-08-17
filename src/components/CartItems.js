import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React from "react";

function CartItems ({ item, itemDelete }) {
  return (
  <Card>
    <Container>
      <Row>
        <Col>{item.producto.nombre}</Col>
        <Col>{item.producto.cantidad}</Col>
        <Col>{item.producto.precio}</Col>
        <Button variant="danger" onClick={itemDelete}>Remover</Button>
      </Row>
    </Container>
  </Card>
   )
}

export default CartItems;
