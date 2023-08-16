import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {

  function handleAdd(cantidad){
    console.log({cantidad});
  }

  return (
    <div>
      <Card className="carta" border="success" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{producto.nombre}</Card.Title> 
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
          <ItemCount inicial={1} stock={5} onAdd={handleAdd}/>
        </Card.Body> 
     
      </Card>
    </div>
  );
}
export default ItemDetail;
//<Button variant="success" size="lg">Añadir al Carrito</Button>