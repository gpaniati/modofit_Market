import Button from 'react-bootstrap/Button';
import "../css/Components.css";

function ItemListContainer({saludo = "Bienvenidos"}) {
  return (
    <div className="itemContainer">
      <h2 id="idSaludo">{saludo}</h2>
      <Button id="botonAgregar">Agregar producto</Button>
    </div>
  );
}

export default ItemListContainer;
