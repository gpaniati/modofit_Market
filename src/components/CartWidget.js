import { Cart } from "react-bootstrap-icons";
import "../css/Components.css";

function CartWidged() {

  let contadorCarrito = 0;
  
  return (
    <div>
      <ul className="listCarrito">
        <li><Cart size={35} /></li>
        <li className="contadorCarrito">{contadorCarrito}</li>
      </ul> 
    </div>
  );
}

export default CartWidged;
