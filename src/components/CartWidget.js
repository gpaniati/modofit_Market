import { Cart } from "react-bootstrap-icons";
import "../css/NavBar.css";
import { useState } from 'react';

function CartWidged() {
  const [contadorCarrito, setContadorCarrito] = useState(0);

  const handleChangeGlobal = () => {
    setContadorCarrito(contadorCarrito + 1);
  };

  return (
    <div>
      <ul className="listCarrito">
        <li><Cart size={35} /></li>
        <li style={{color: "green"}}>{contadorCarrito}</li>
      </ul>
    </div>
  );
}

export default CartWidged;
