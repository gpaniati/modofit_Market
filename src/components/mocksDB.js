import productosDB from "../data/productos.json";

//Traer base de datos de productos asincronicamente.
export const getMockProductosAsync = () => {
  const promesaProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      //if (productosDB.length < 10){
      if (productosDB.length === 0) {
        reject("Error en la base de productos. Reintente mas tarde");
      }

      resolve(productosDB);
    }, 1500);
  });

  return promesaProductos;
}

//Traer produto especifico de base de datos de productos asincronicamente.
export const getMockUnProductoAsync = (idProducto) => {
  const promesaProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productosDB.length === 0) {
        reject("Error en la base de productos. Reintente mas tarde");
      }
      console.log("Hola")
      console.log(productosDB[2]);
      resolve(productosDB[0]);
      //resolve(productosDB.find((idProducto) => idProducto === id));
    }, 1000);
  });

  return promesaProducto;
}