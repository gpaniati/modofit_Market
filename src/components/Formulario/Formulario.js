import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart/CartContext/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../Formulario/Formulario.css";

function Formulario() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { cartList, removeList } = useContext(CartContext);
  const navigate = useNavigate();

  const setField = (field, value) => {
    setForm({
    ...form,
    [field]:value
  })

  if (!!errors[field])
    setErrors({
      ...errors,
      [field]:null
  });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form !== {}){
      //Armo orden para subir a FireStore.
      const newOrderProducts = (cartList.map((producto) => (
        {
          cantidad: producto.cantidad,
          id: producto.id,
          precio: producto.precio,
          nombre: producto.nombre
        }))
      );
      const newOrderFinal = ({newOrderProducts, form});

      const dataBaseOrders = getFirestore();
      const collectionOrders = collection(dataBaseOrders, "orders");
  
      //Subo order de compra a FireStore.
      addDoc(collectionOrders, newOrderFinal)
        .then(({id}) => {handleFinCompra(id)})
        .catch((error) => console.error(error));
    }
  }

  //Navego a la ruta de confirmacion de compra.
  function handleFinCompra(idOrder) {
    removeList();
    navigate(`/fincompra/${idOrder}`);
  }

  return (
    <div className="formulario d-flex flex-row justify-content-center">
      <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName"> 
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" 
            placeholder="Ingrese su nombre" 
            value = {form.formName}
            onChange={(e) => setField("formName", e.target.value)}
            isInvalid={!!errors.formName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
            {errors.formName}
            </Form.Control.Feedback>
          </Form.Group> 
          <Form.Group className="mb-3" controlId="formSurname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="surname" 
            placeholder="Ingrese su apellido" 
            value = {form.formSurname}
            onChange={(e) => setField("formSurname", e.target.value)}
            isInvalid={!!errors.formSurname}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.formSurname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" 
            placeholder="Ingrese Email" 
            value = {form.formEmail}
            onChange={(e) => setField("formEmail", e.target.value)}
            isInvalid={!!errors.formEmail}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.formEmail}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controId="submit">
            <Button variant="success" onClick={handleSubmit}>COMPRAR</Button>
          </Form.Group>
        </Form>
        </Card.Body>
        </Card>
      </div> 
  );
}

export default Formulario;