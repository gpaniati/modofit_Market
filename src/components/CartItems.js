import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React from "react";

function CartItems({ item, itemDelete }) {
  return (
    <Card>
      <Container>
        <Row>
          <Col>{item.nombre}</Col>
          <Col>Cantidad: {item.cantidad}</Col>
          <Col>Precio: ${item.precio}</Col>
          <Col>
            <Button variant="danger" size="sm" onClick={itemDelete}>
              Eliminar
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default CartItems;
