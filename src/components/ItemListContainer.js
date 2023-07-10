import Button from "react-bootstrap/Button";
import "../css/Components.css";

function ItemListContainer({ saludo = "Bienvenidos"}) {

  return (
    <div className="itemContainer">
      <h2 className="h2Saludo">{saludo}</h2>
      <Button>Agregar producto</Button>
    </div>
  );
}

export default ItemListContainer;
