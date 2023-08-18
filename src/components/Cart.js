import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import CartItems from "./CartItems";

function Cart() {
  const { cartList, deleteItem} = useContext(CartContext);

  function handleItemDelete(id){
    deleteItem(id);
  }

  return (
    <div>
      {cartList.map((producto) => (
        <CartItems key={producto.id} item={producto} itemDelete={handleItemDelete} />
      ))}
    </div>
  );
}

export default Cart;
