import { getDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { createContext, useState } from "react";
export const CartContext = createContext();

function CartProvider({ children }) {

  const dbName = "productos";
  //Array con productos del carrito.
  const [cartList, setCartList] = useState([]);
  //Cantidad de productos en carrito.
  const [totalProductos, setTotalProductos] = useState(0);
  //Precio total de los productos delcarrito ;
  const [precioTotal, setPrecioTotal] = useState(0);
  //Estado de update.
  const [updateState, setUpdateState] = useState(false);

  //Hook que detecta la incorporacion de producto y recalcula precio total de compra.
  /*useEffect(() => {
    setTotalProductos(0);
    //setPrecioTotal(handlePrecioTotal())
  }, [cartList]);
  */

  //funcion para calcular el precio total del carrito. 
  /*function handlePrecioTotal() {
    const cartAuxiliar = (handlePrecioTotalByProducto());
    const valorInicial = 0;
    return cartAuxiliar.reduce((acumulador, producto) => acumulador + producto.precioTotalByProdcuto, valorInicial);
  }*/

  //Funcion para retorna un carrito con item y su total de acuerdo a la cantidad). 
  /*function handlePrecioTotalByProducto() {
    return cartList.map((producto) => ({...producto, precioTotalByProdcuto: (producto.cantidad * producto.precio)}));
  }*/

  //Funcion para para agregar un producto al carrito.
  function addToCart(producto, cantidad) {
    let newCart;
    let prod = cartList.find((prod) => prod.id === producto.id);
    if (prod){
      prod.cantidad += cantidad;
      newCart = [...cartList]; 
    }else{
      const newProd = {
        id: producto.id,
        categoria: producto.categoria,
        descripcion: producto.descripcion,
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: producto.precio
      }
      newCart = [...cartList, {...newProd, cantidad: cantidad}];
    }   
    setUpdateState(false);
    updateStock(producto.id, cantidad);
    setCartList(newCart);
    setTotalProductos(totalProductos + cantidad);
  }

  //Funcion para vaciar el carrito.
  function removeList() {
    setCartList([]);
    setPrecioTotal(0);
    setTotalProductos(0);
  }

  //Funcion para eliminar producto del carrito.
  function deleteItem(prod) {
    const itemDelete = cartList.find((producto) => producto.id === prod.id );
    setCartList(cartList.filter((producto) => producto.id !== prod.id));
    if (itemDelete){
      const cantidadNegativa = itemDelete.cantidad * (-1);
      setUpdateState(false);
      updateStock(prod.id, cantidadNegativa);
      if (updateState){
        setTotalProductos(totalProductos - itemDelete.cantidad);
      }
    }
  }

  //Funcion para modificar stock del producto en FireStore.
  function updateStock(id, cantidad) {
      const dataBaseProductos = getFirestore();
      const productoRef = doc(dataBaseProductos, dbName, id);
      //Obtengo producto de la base para sabe su stock actual.
      getDoc(productoRef)
      .then((snapshot) => {
      if (snapshot.exists()) {
        const producto = {id: snapshot.id, ...snapshot.data()};
        const stockNuevo = producto.stock - cantidad;
        //Actualizo stock de producto en Firestore. 
        updateDoc(productoRef, {stock: stockNuevo})
          .then(setUpdateState(true))
          .catch((error) => console.error(error));
      }})
      .catch((error) => console.error(error));
  }

  const contexto = {
    cartList,
    totalProductos,
    precioTotal,
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