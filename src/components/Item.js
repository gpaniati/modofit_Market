import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagenProducto1 from "../images/modofit_producto_1.png";
import imagenProducto2 from "../images/modofit_producto_2.png";
import imagenProducto3 from "../images/modofit_producto_3.png";
import imagenProducto4 from "../images/modofit_producto_4.png";
import imagenProducto5 from "../images/modofit_producto_5.png";
import imagenProducto6 from "../images/modofit_producto_6.png";
import imagenProducto7 from "../images/modofit_producto_7.png";
import imagenProducto8 from "../images/modofit_producto_8.png";

function Item({ producto }) {
    return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagenProducto1} />
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
