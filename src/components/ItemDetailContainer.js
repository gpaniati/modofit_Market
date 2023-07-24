function ItemDetailContainer({producto}) {

    return (
      <div>
        <h5 key={producto.id}>{producto.descripcion}</h5>
      </div>
    )
  }
  
  export default ItemDetailContainer;