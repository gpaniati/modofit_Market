import { Cart } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import useCartContext from "../context/cart/useCartContext";
//import { useContext } from "react";
//import CartContext from "../context/cart/CartContext";

function CartWidged() {

  return (
    <div>
      <Cart size={35} />
      <Badge bg="success">0</Badge>
    </div>
    
  );
}

export default CartWidged;
