# Documentación del Proyecto de React - E-Commerce

Este proyecto de React se enfoca en el desarrollo de una tienda en línea con las siguientes características principales:

Navbar: Se ha creado una barra de navegación que permite a los usuarios acceder a las categorias de los productos, el carrito y el home clickeando el logo.

Catálogo de Productos: La aplicación muestra una lista de productos disponibles para la compra. Los productos se muestran con su nombre, precio y una opción para ver mas detalles.

Detalle de Producto: Los usuarios pueden ver los detalles completos de un producto específico haciendo clic en él. Los detalles incluyen información, como descripción, precio y una opción para agregarlo al carrito.

CartContext: Se ha implementado un contexto llamado CartContext que proporciona funciones para administrar el carrito de compras. Estas funciones incluyen agregar un producto al carrito, ver la cantidad de productos en el carrito, calcular el precio total, eliminar productos del carrito y limpiar el carrito por completo.

CartWidget: Se muestra un ícono de carrito en la barra de navegación (Navbar) que refleja la cantidad de productos en el carrito. Si no hay productos en el carrito, el icono no se muestra.

Checkout: Los usuarios pueden proceder al proceso de pago desde el carrito de compras. El proceso de pago puede incluir la información del cliente y la confirmación del pedido.

Configuración del Proyecto
Para configurar y ejecutar el proyecto en tu entorno local, sigue estos pasos:

Clona el repositorio desde GitHub o crea un proyecto React nuevo utilizando Create React App.

Instala las dependencias necesarias, como react-router-dom para la navegación y otras dependencias relacionadas con tu proyecto.
npm install react-router-dom

Otras dependencias según las necesidades

Ejecución del Proyecto
Una vez configurado el proyecto, puedes ejecutarlo utilizando el siguiente comando:

npm start
Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador.
