/* ==========================================================================
   KATA 1: El Black Friday (.map)
   Consigna: Recibirás un array de precios. Debes retornar un NUEVO array 
   donde a cada precio se le haya aplicado un 20% de descuento.
   ¡Prohibido usar bucles for! Usa .map()
========================================================================== */
function aplicarDescuento(precios) {
  // TU CÓDIGO AQUÍ 👇

  return precios.map((precio) => precio * 0.8);
}
aplicarDescuento([34, 500, 230, 10])
/* ==========================================================================
   KATA 2: Control de Stock (.filter)
   Consigna: Recibirás un array de objetos (productos). Debes retornar un 
   nuevo array SOLO con los productos que tengan su propiedad 'enStock' en true.
========================================================================== */
function filtrarDisponibles(productos) {
  // TU CÓDIGO AQUÍ 👇 

  return productos.filter((producto) => producto.enStock)
}
filtrarDisponibles([
    { nombre: "teclado", enStock: true },
    { nombre: "mouse", enStock: false },
    { nombre: "monitor", enStock: true }
  ])
/* ==========================================================================
   KATA 3: La Caja Registradora (.reduce)
   Consigna: Recibirás un array de números (precios de un carrito). 
   Debes retornar la suma total de todos los números.
========================================================================== */
function calcularTotal(carrito) {
  // TU CÓDIGO AQUÍ 👇

  return carrito.reduce((acc, valorPrecio) => acc + valorPrecio, 0)
}
calcularTotal([8, 2, 1])
/* ==========================================================================
   KATA 4: El Consultorio (FIFO - Colas)
   Consigna: Recibirás un array con nombres de pacientes en espera. 
   Debes sacar al PRIMER paciente de la fila, y retornar un string que diga:
   "Atendiendo a: [nombre_del_paciente]".
========================================================================== */
function llamarSiguiente(salaDeEspera) {
  // TU CÓDIGO AQUÍ 👇

  let paciente = salaDeEspera.shift()
  return `Atendiendo a: ${paciente}`;
}
console.log(llamarSiguiente(['juan', 'monica', 'lionel']))
// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  aplicarDescuento,
  filtrarDisponibles,
  calcularTotal,
  llamarSiguiente,
};
