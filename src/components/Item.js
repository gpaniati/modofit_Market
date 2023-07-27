import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Item({ producto }) {
    return (
    <div>
      <Card className="carta" style={{ width: "28rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
          <Button as={Link} to={`/item/${producto.id}`} variant="primary">Ver Detalle Producto</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
