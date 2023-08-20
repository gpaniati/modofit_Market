import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext/CartContext";
import "../Formulario/Formulario.css";

function Formulario() {
  const { cartList, removeList } = useContext(CartContext);

  function handleAddOrder() {
    removeList();
    console.log("Enviado");
  }

  return (
    <div className="formulario d-flex flex-row justify-content-center">
      <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="name" placeholder="Ingrese su nombre y apellido" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese Email" />
          </Form.Group>
          <Button variant="success" onClick={() => handleAddOrder()}>
            COMPRAR
          </Button>
        </Form>
        </Card.Body>
        </Card>
      </div>
  );
}

export default Formulario;