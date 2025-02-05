// Variables con let

let producto = 'audifonos gamer'; // Iniciar variable y asignarle valor.

let disponible; // Iniciamos la variable pero sin valor.

producto = true; // Reasignando el valor de la variable.

disponible = true;

let producto1 = 'computadora',
    categoria = 'computadora'; // Se eliminó la reasignación de 'disponible' para evitar sobrescribirla.

// let 1disponible; (esto está mal, no puedes empezar una variable con un número)
let disponible_;

// Estilos para las variables
let nombre_producto = 'monitor hd'; // Underscore (puedes cambiar a camelCase para más consistencia)
let nombreProducto = 'monitor hd'; // Camelcase
let nombreproducto = 'monitor hd'; // Lower case

// Case sensitive
// Lenguaje de tipo dinámico

// Actualmente se utiliza let y const.

console.log(producto); // Debería ser 'producto', no 'PRODUCTO'.
