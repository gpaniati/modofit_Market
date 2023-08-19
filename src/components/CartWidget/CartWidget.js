import { Cart } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext/CartContext";

function CartWidged() {

  const {totalItems} = useContext(CartContext);

  return (
    <div>
      <Cart size={35} />
      <Badge bg={`${(totalItems > 0) ? 'success' : 'danger'}`} >{totalItems}</Badge>
    </div>
    
  );
}

export default CartWidged;