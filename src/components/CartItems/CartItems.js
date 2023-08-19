//import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import { BsFillTrashFill } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';

function CartItems({ item, itemDelete }) {

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-around align-items-center"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.nombre}</div>
          ${item.precio}
        </div>
        <Image className="imageCart" src={item.imagen}/>
        <Badge className="badgeCart" bg="success"pill>
          {item.cantidad}
        </Badge>
        <BsFillTrashFill color="red" size={30} onClick={() => itemDelete(item.id)} />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CartItems;