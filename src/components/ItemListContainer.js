import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getMockProductosAsync } from "./mocksDB";

function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getMockProductosAsync()
    .then(response => {
      setProductos(response);
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

export default ItemListContainer;
