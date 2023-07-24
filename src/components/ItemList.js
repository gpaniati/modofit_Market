import ItemDetailContainer from "./ItemDetailContainer";

function ItemList({ productos }) {
  return (
    <div>
      {productos.map((producto) => (
        <ItemDetailContainer key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
