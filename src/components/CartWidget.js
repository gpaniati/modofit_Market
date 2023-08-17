import { Cart } from "react-bootstrap-icons";
import "../css/Components.css";
import useCartContext from "../context/cart/useCartContext";
//import { useContext } from "react";
//import CartContext from "../context/cart/CartContext";

function CartWidged() {

  const cantidadCarrito = useCartContext();
  console.log(cantidadCarrito);

  return (
    <div>
      <ul className="listCarrito">
        <li><Cart size={35} /></li>
        <li className="contadorCarrito">0</li>
      </ul> 
    </div>
  );
}

export default CartWidged;
