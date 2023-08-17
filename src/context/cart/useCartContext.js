import { useContext } from "react";
import CartContext from "./CartContext";

const useCartContext = () => {
  const contexto = useContext(CartContext);

  return contexto;
}

export default useCartContext;