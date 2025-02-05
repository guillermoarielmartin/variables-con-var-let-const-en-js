// Variables con const

const producto = 'audifonos gamer'; // Declaramos una constante, 'producto' no puede cambiar su valor después de ser asignado.
let disponible = true; // Declaramos una variable 'disponible' que puede cambiar su valor.

console.log(producto); // Muestra 'audifonos gamer' en la consola.

// Si intentamos reasignar 'producto' generará un error porque fue declarado con 'const'.
// producto = true; // Esto genera un error.

// Variables con let

let producto1 = 'computadora', // Usamos let porque esta variable puede cambiar.
    categoria = 'computadora'; // Usamos let para 'categoria' porque también puede cambiar.

let disponible_ = true; // Usamos let para declarar una nueva variable 'disponible_'.

// Estilos para las variables
let nombre_producto = 'monitor hd'; // Underscore (separados por guion bajo).
let nombreProducto = 'monitor hd'; // Camelcase (primera palabra en minúscula, la siguiente con mayúscula).
let nombreproducto = 'monitor hd'; // Lower case (todo en minúsculas).

// El nombre de las variables es sensible a mayúsculas y minúsculas, así que 'nombre_producto' es diferente de 'Nombre_Producto'.
let NombreProducto = 'monitor hd'; // Pascal case (primera letra de cada palabra en mayúscula).

// Caso de error: intentamos declarar una variable con un número al principio (esto es incorrecto).
// let 1disponible; // Esto generará un error porque no se puede empezar el nombre de una variable con un número.

// Case sensitive - Lenguaje de tipo dinámico
// Esto significa que 'producto' y 'Producto' son variables diferentes.

console.log(producto1); // Muestra 'computadora' en la consola.
console.log(disponible_); // Muestra 'true' en la consola.
console.log(categoria); // Muestra 'computadora' en la consola.
console.log(nombreProducto); // Muestra 'monitor hd' en la consola.
console.log(NombreProducto); // Muestra 'monitor hd' en la consola.




