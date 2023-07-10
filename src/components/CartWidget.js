import { Cart } from "react-bootstrap-icons";
import "../css/Components.css";
import { useState } from 'react';

function CartWidged() {
  const [contadorCarrito, setContadorCarrito] = useState(0);

  const handleChangeGlobal = () => {
    setContadorCarrito(contadorCarrito + 1);
  };

  return (
    <div>
      <ul id="listCarrito">
        <li><Cart size={35} /></li>
        <li id="contadorCarrito">{contadorCarrito}</li>
      </ul> 
    </div>
  );
}

export default CartWidged;
