import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemDetail({ producto }) {
  return (
    <div>
      <Card className="carta" border="success" style={{ width: "35rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{producto.nombre}</Card.Title> 
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
          <Button variant="success" size="lg">Añadir al Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ItemDetail;
