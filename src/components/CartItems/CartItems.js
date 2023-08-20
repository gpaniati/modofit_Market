//import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Box from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import "../CartItems/CartItems.css";

function CartItems({ item, itemDelete }) {

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-center align-items-center"
      >
        <Image className="imageCart" src={item.imagen}/>  
        <div className="detalleItem ms-2 me-auto">
          <div className="fw-bold">{item.nombre}</div>
          ${item.precio}
        </div> 
        <Badge className="badgeCart" bg="success"pill>
          {item.cantidad}
        </Badge>
        <div className="totalItem">${(item.precio * item.cantidad)}</div>
        <BsFillTrashFill color="red" size={30} onClick={() => itemDelete(item.id)} />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CartItems;