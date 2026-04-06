/* ==========================================================================
   04 — Katas Combinadas | 10 Katas nivel Senior
   Cada función combina map + filter + reduce de forma encadenada.
   ⚠️  Prohibido usar bucles for/while. Solo métodos de array.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — Ticket de Compra
   Dado un array de productos { nombre, precio, cantidad, disponible },
   retorná el total a pagar sumando solo los disponibles (precio * cantidad).
   Ej: [{nombre:'TV',precio:500,cantidad:1,disponible:true},
        {nombre:'Cable',precio:50,cantidad:2,disponible:false}]
   → 500
-------------------------------------------------------------------------- */
function ticketCompra(productos) {
  // TU CÓDIGO AQUÍ 👇

  return productos.reduce((acc, curr) => {
    if(curr.disponible == true) {
      acc += curr.precio * curr.cantidad
    } 
    return acc
  }, 0)
}
console.log(ticketCompra([
  {nombre:'TV',precio:800,cantidad:1,disponible:true},
  {nombre:'Cable',precio:50,cantidad:2,disponible:false}
]))
/* --------------------------------------------------------------------------
   KATA 2 — Resumen de Notas
   Dado un array de alumnos { nombre, nota }, retorná un objeto:
   { aprobados: [...nombres], reprobados: [...nombres], promedio: N }
   Aprobado si nota >= 6. Promedio redondeado a 2 decimales.
   Ej: [{nombre:'Ana',nota:8},{nombre:'Luis',nota:4}]
   → { aprobados: ['Ana'], reprobados: ['Luis'], promedio: 6 }
-------------------------------------------------------------------------- */
function resumenNotas(alumnos) {
  // TU CÓDIGO AQUÍ 👇

  const resultado = alumnos.reduce((acc, curr) => {
    acc.suma += curr.nota

    if (curr.nota >= 6) {
      acc.aprobados.push(curr.nombre)
    } else {
      acc.reprobados.push(curr.nombre)
    }

    return acc
  }, { aprobados: [], reprobados: [], suma: 0 })

  return {
    aprobados: resultado.aprobados,
    reprobados: resultado.reprobados,
    promedio: +(resultado.suma / alumnos.length).toFixed(2)
  }
}
resumenNotas([{nombre:'Ana',nota:8},{nombre:'Luis',nota:4}])
/* --------------------------------------------------------------------------
   KATA 3 — Palabras Únicas en Mayúsculas
   Dado un array de strings (posiblemente con duplicados), retorná un array
   con cada palabra única convertida a MAYÚSCULAS, sin repetidas.
   Ej: ['hola','mundo','hola','js'] → ['HOLA','MUNDO','JS']
-------------------------------------------------------------------------- */
function unicasEnMayusculas(palabras) {
  // TU CÓDIGO AQUÍ 👇

  return palabras.reduce((acc, palabra) => {
    const upper = palabra.toUpperCase();

    if (!acc.includes(upper)) {
      acc.push(upper);
    }
    return acc
  }, [])
}
unicasEnMayusculas(['hola','mundo','hola','js'])
/* --------------------------------------------------------------------------
   KATA 4 — Top 3 Más Caros
   Dado un array de productos { nombre, precio }, retorná los 3 de mayor
   precio (ordenados de mayor a menor) como array de nombres.
   Ej: retorná ['TV','Laptop','Tablet'] si son los 3 más caros.
-------------------------------------------------------------------------- */
function top3MasCaros(productos) {
  // TU CÓDIGO AQUÍ 👇

  return productos
    .sort((a, b) => b.precio - a.precio)
    .slice(0, 3)                         
    .map(p => p.nombre); 
}
top3MasCaros([{nombre: 'TV', precio: 4000}, {nombre: 'PlayStation', precio: 1000},
  {nombre: 'Tablet', precio: 3000}, {nombre: 'Laptop', precio: 5000}
])
/* --------------------------------------------------------------------------
   KATA 5 — Usuarios Premium con Descuento
   Dado un array de usuarios { nombre, esPremium, saldo },
   retorná un array con los usuarios premium y su saldo con 10% de descuento
   (saldo con bono aplicado: saldo * 1.1).
   Ej: [{nombre:'Ana',esPremium:true,saldo:100}]
   → [{nombre:'Ana',esPremium:true,saldo:110}]
-------------------------------------------------------------------------- */
function bonosPremium(usuarios) {
  // TU CÓDIGO AQUÍ 👇

  return usuarios.reduce((acc, user) => {
    if (user.esPremium) {
      acc.push({
        ...user,
        saldo: Number((user.saldo * 1.1).toFixed(0))       
      });
    }
    return acc;
  }, []);
}
bonosPremium([{nombre:'Ana',esPremium:true,saldo:100}])
/* --------------------------------------------------------------------------
   KATA 6 — Estadísticas de Ventas
   Dado un array de ventas { producto, monto, region },
   retorná un objeto con el total vendido por región.
   Ej: [{producto:'TV',monto:500,region:'norte'},{producto:'Radio',monto:100,region:'norte'},{producto:'PC',monto:800,region:'sur'}]
   → { norte: 600, sur: 800 }
-------------------------------------------------------------------------- */
function ventasPorRegion(ventas) {
  // TU CÓDIGO AQUÍ 👇
  return ventas.reduce((acc, curr) => {
    acc[curr.region] = (acc[curr.region] || 0) + curr.monto;
    return acc;
  
  }, {});
}
ventasPorRegion([{producto:'TV',monto:500,region:'norte'},{producto:'Radio',monto:100,region:'norte'},{producto:'PC',monto:800,region:'sur'}])
/* --------------------------------------------------------------------------
   KATA 7 — Inventario Crítico
   Dado un array de productos { nombre, stock, minimo },
   retorná los nombres de los productos cuyo stock sea menor al mínimo,
   en MAYÚSCULAS y ordenados alfabéticamente.
   Ej: [{nombre:'tornillo',stock:2,minimo:10},{nombre:'clavo',stock:20,minimo:5}]
   → ['TORNILLO']
-------------------------------------------------------------------------- */
function inventarioCritico(productos) {
  // TU CÓDIGO AQUÍ 👇
  return productos
    .filter(producto => producto.stock < producto.minimo)
    .map(producto => producto.nombre.toUpperCase())
    .sort();
  
}
inventarioCritico([{nombre:'tornillo',stock:2,minimo:10},{nombre:'clavo',stock:20,minimo:5}])
/* --------------------------------------------------------------------------
   KATA 8 — Historial de Búsqueda Limpio
   Dado un array de strings (historial), retorná un array sin duplicados,
   sin strings vacíos y con cada término en minúsculas, ordenado
   alfabéticamente.
   Ej: ['JS', 'css', 'JS', '', 'html', 'CSS']
   → ['css', 'html', 'js']
-------------------------------------------------------------------------- */
function limpiarHistorial(historial) {
  // TU CÓDIGO AQUÍ 👇

  return historial.reduce((acc, palabra) => {
    const lower = palabra.toLowerCase()
    if (lower !== '' && !acc.includes(lower)) {
      acc.push(lower);
    }
    return acc
  }, [])
  .sort()
}
limpiarHistorial(['JS', 'css', 'JS', '', 'html', 'CSS'])
/* --------------------------------------------------------------------------
   KATA 9 — Ranking de Jugadores
   Dado un array de jugadores { nombre, puntos, activo },
   retorná el TOP 3 de jugadores ACTIVOS con más puntos como array de strings
   en formato "N. nombre — puntos pts".
   Ej: "1. Mario — 980 pts"
-------------------------------------------------------------------------- */
function rankingJugadores(jugadores) {
  // TU CÓDIGO AQUÍ 👇

  return jugadores    
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, 3)                         
    .map((jugador, index) => { 
      if (jugador.activo) {
        return `${index + 1}. ${jugador.nombre} — ${jugador.puntos} pts`
      }
    }); 
}
rankingJugadores([{ nombre: 'miguel', puntos: 980, activo: true }, { nombre: 'jose', puntos: 800, activo: true },
  { nombre: 'nicolas', puntos: 790, activo: true }]
)
/* --------------------------------------------------------------------------
   KATA 10 — Pipeline de Datos
   Dado un array de empleados { nombre, departamento, salario, activo },
   retorná el salario promedio del departamento "tecnología"
   considerando SOLO los empleados activos.
   Redondeá a 2 decimales. Si no hay empleados activos, retorná 0.
-------------------------------------------------------------------------- */
function salarioPromedioTech(empleados) {
  // TU CÓDIGO AQUÍ 👇

  const activos = empleados.filter(
    e => e.activo && e.departamento === 'tecnología'
  );

  if (activos.length === 0) return 0; // 👈 evitar NaN

  const total = activos.reduce((acc, curr) => acc + curr.salario, 0);

  return Number((total / activos.length).toFixed(2));
}
console.log(salarioPromedioTech([
  { nombre: 'juan', departamento: 'tecnología', salario: 2, activo: true }, 
  {  nombre: 'angel', departamento: 'tecnología', salario: 4, activo: true }, 
  {  nombre: 'jesus', departamento: 'tecnología', salario: 4, activo: true }
]))
// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  ticketCompra,
  resumenNotas,
  unicasEnMayusculas,
  top3MasCaros,
  bonosPremium,
  ventasPorRegion,
  inventarioCritico,
  limpiarHistorial,
  rankingJugadores,
  salarioPromedioTech,
};
