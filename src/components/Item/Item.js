import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "../Item/Item.css";

function Item({ producto }) {
  
    return (
    <div>
      <Card className="carta md=6" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text className='precio'>${producto.precio}</Card.Text>
          <Button as={Link} to={`/item/${producto.id}`} variant="success">Ver Detalle</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;