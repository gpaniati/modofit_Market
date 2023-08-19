import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  //Array con productos del carrito.
  const [cartList, setCartList] = useState([]);
  //Cantidad de productos en carrito.
  const [totalItems, setTotalItems] = useState(0);

  //Funcion para para agregar un producto al carrito.
  function addToCart(producto, cantidad) {
    let newCart;
    let prod = cartList.find((prod) => prod.id === producto.id);
    if (prod){
        prod.cantidad += cantidad;
        newCart = [...cartList]; 
    }else{
        newCart = [...cartList, {...producto, cantidad: cantidad}];
    }   
    setCartList(newCart);
    setTotalItems(totalItems + cantidad);
  }

  //Funcion para vaciar el carrito.
  function removeList() {
    setCartList([]);
    setTotalItems(0);
  }

  //Funcion para eliminar producto del carrito.
  function deleteItem(id) {
    const itemDelete = cartList.find((producto) => producto.id === id );
    setCartList(cartList.filter((producto) => producto.id !== id));
    if (itemDelete){
      setTotalItems(totalItems - itemDelete.cantidad);
    }
    console.log(totalItems);
  }

  const contexto = {
    cartList,
    totalItems,
    addToCart,
    removeList,
    deleteItem
  }

  return (
    <CartContext.Provider value={contexto}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider;