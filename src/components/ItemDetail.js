import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDetail({ producto }) {
    return (
    <div>
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;