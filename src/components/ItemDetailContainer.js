import { useEffect, useState } from "react";
import { getMockUnProductoAsync } from "./mocksDB";

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
  }, [])
  return (
    <div>
     Hola
    </div>
  )
}

export default ItemDetailContainer;

