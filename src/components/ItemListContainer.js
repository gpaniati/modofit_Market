import "../css/Components.css";

function ItemListContainer({saludo = "Bienvenidos"}) {
  return (
    <div className="item">
      <h2 id="idSaludo">{saludo}</h2>:
    </div>
  );
}

export default ItemListContainer;
