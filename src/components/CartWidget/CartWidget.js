import { Cart } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext/CartContext";

function CartWidged() {

  const {totalProductos} = useContext(CartContext);

  return (
    <div>
      <Cart size={35} />
      <Badge bg={`${(totalProductos > 0) ? 'success' : 'danger'}`} >{totalProductos}</Badge>
    </div>
    
  );
}

export default CartWidged;