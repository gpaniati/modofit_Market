import CardGroup from "react-bootstrap/CardGroup";
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div>
      <CardGroup className="justify-content-around">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </CardGroup>
    </div>
  );
}

export default ItemList;
