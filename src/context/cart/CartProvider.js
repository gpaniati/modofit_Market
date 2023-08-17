import CartContext from "./CartContext";
import { useState } from "react";

function CartProvider( {children } ) {
  const [cartList, setCartList] = useState([]);

  //Funcion para para agregar un producto al carrito.
  function addToCart(producto, cantidad) {
    console.log("Entro a addToCart");
    console.log(cantidad);
    console.log(producto);
    console.log("Que tiene cartList");
    console.log(cartList);
    //let carro;
    //carro = cartList.find(prod => prod.id === producto.id);
    //console.log(carro);
    //console.log(producto);
    //console.log(cartList);
    /*
    if (existe){
        producto.cantidad = producto.cantidad + cantidad;
        setCartList(cartList);
    }else{
        setCartList(...cartList, {...producto, cantidad: cantidad});
    }
    console.log(cartList);*/
  }

  //Funcion para vaciar el carrito.
  function removeList() {
    setCartList([]);
  }

  //Funcion para eliminar producto del carrito.
  function deleteProducto(id) {
    setCartList(cartList.filter((producto) => producto.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteProducto }}
    >
      {children}
    </CartContext.Provider>
  );

}

export default CartProvider;
