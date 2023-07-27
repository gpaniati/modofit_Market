import CardGroup from "react-bootstrap/CardGroup";
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div>
      <CardGroup className="d-flex justify-content-around align-items-center mt-3">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </CardGroup>
    </div>
  );
}

export default ItemList;
