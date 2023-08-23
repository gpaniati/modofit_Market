
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import { BsFillTrashFill } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import "../CartItems/CartItems.css";
import { Card } from 'react-bootstrap';

function CartItems({ item, itemDelete }) {

  return (
    <div className='cartItem d-flex justify-content-center'>
    <Card style={{ width: "40rem" }}>
      <Card.Body>
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
        <Badge className="badgeCart" bg="success">
          {item.cantidad}
        </Badge>
        <div className="totalItem">${(item.precio * item.cantidad)}</div>
        <BsFillTrashFill color="red" size={30} onClick={() => itemDelete(item)} />
      </ListGroup.Item>
    </ListGroup>
    </Card.Body>
    </Card>
    </div>
  );
}

export default CartItems;