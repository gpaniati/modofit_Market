import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import React from "react";

function CartItems({ item, itemDelete }) {
  return (
    <Card>
      <Container>
        <Row>
          <Col>
            <Image src={item.imagen} rounded/>
          </Col>
          <Col>{item.nombre}</Col>
          <Col>Cantidad: {item.cantidad}</Col>
          <Col>Precio: ${item.precio}</Col>
          <Col>
            <Button
              variant="danger"
              size="sm"
              onClick={() => itemDelete(item.id)}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default CartItems;
