import { useEffect, useState } from "react";
import getMockProductosAsync from  "../components/productosDB";
import ItemList from "./ItemList";

function ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getMockProductosAsync
    .then(response => {
      setProductos(response);
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer;
