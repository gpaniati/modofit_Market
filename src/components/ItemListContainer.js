import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getMockProductosAsync } from "./mocksDB";
import ItemDetailContainer from "./ItemDetailContainer";

function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getMockProductosAsync()
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
      <ItemDetailContainer />
    </div>
  )
}

export default ItemListContainer;
