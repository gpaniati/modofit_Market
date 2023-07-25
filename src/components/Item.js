import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({ producto }) {
    return (
    <div>
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
          <Button variant="primary">Ver Detalle Producto</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
