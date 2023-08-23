<p align="center" width="200">
   <img align="center" width="100" src="modofit_market/public/images/logo_modofit_market.png" />   
</p>

# Modo Fit Market - Tienda de alimentos naturales
**Productos saludables en un solo**

### **[Demo](https://modofit-market.netlify.app)**

### Proyecto final del curso de React de Coderhouse

#### **Consigna**
- Desarrollar una app de un e-commerce para poder vender productos de un rubro a elección. En esta caso elegí desarrollar esta tienda de productos saludables.

##### Componentes básicos.

+ Navbar
> Este componente esta compuesto por los links s las distintas categorías de los productos de la tienda.

+ Catálogo
> El catálogo implementado representa cada una de las categorias de procuctos dentro en la tienda. En el caso de seleecionar una categoria, se mostraran sólo los productos de la tienda asociados a la misma.
Se puede ver implementado en el componente **ItemListContainer** que realiza una consulta asincrónica a la base de productos implementada en Firebase  a traves del hook **useGetDocumentsByCategory**.  En el caso que la categoría no se informe dentro de los parámetros, el mismo devolverá toda la base de productos.

+ Detalle de producto
>El detalle de producto nos muestra una imagen detallada del mismo incorporando su stock (el cual proviene y es actualizado en la colección) y la posibilidad de seleccionar la cantidad de produtos a comprar (la seleccion de productos valida entre el minimo (1 producto) y un maximo (el stock).). En caso de quedarse sin stock, se dejara de informar el estock disponible y se informará el mensaje **SIN STOCK** no permitiendo la compra.
Ademas, dentro del detalle, tendras la posibilidad de agregar los productos al carrito, seguir compando o finalizar la compra.
Se encuentra implementado dentro del  **ItemDetal**.

+ CartContext
>Este componete representa el contexto del carrito el cual me permita interactuar y agrupar los estados del carrito para que puedan ser utilizados por otros componentes sin necesitad de implementar un callback complejo hacia arriba.
Se encuentra desarrollado en el componente **CartContext**.

+ CartWidget
>Este componente representa la imagen del carrito junto con un totalizador de la cantidad de productos agregados al mismo cada vez que el usuario los añade a su compra. Interactua con el carrito a travez del contexto **CartContext**
Se encuentra implementado en el componente **CartWidget**.

+ CheckOut
>Este componente representa el anteúltimo paso del proceso de compra. Aquí, el comprado debe ingresar sus datos personales para que el vendedor pueda recibir la nformacion del mismo.
Se encuentra implementado en el componente **CheckOut.js**

+ Voucher
>Este componente respresenta el final de la compra, el cual notifica al usuario con la confirmación del pedido y su el número de orden de compra la cual queda registrado en la colección **orders** dentro de Firebase.
Se encuentra implementado en el componente **Voucher.js**.

<br>
El proyecto cuenta con una única rama **master** donde se se encuentra la versión productiva en el último commit. [gitHub](https://github.com/gpaniati/modofit_market.git).
La misma se encuentra deployada en [netlify](https://www.netlify.com/) bajo esta [url](https://modofit-market.netlify.app).
La app es **responsive**. Se adapta a las pantallas de los diferenctes dispositivos.

<br>
#### **Librerias utilizadas**

- [react-router](https://reactrouter.com/resources): Librería para el ruteo.
- [firebase](https://firebase.google.com/docs/web/setup?authuser=0): Servicio web que nos proporciona un backend en la nube.
- [react-bootstrap](https://react-bootstrap.netlify.app/): Unos de los framework mas utilizados.