import { useEffect, useState } from "react";
import { getMockUnProductoAsync } from "./mocksDB";
import ItemDetail from "./Itemdetail";

function ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getMockUnProductoAsync()
    .then(response => {
      setProducto(response);
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer;

