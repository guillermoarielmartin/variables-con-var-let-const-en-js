# Introducción a JavaScript - Variables

Este repositorio contiene ejemplos básicos sobre el uso de variables en JavaScript, incluyendo las formas de declaración, reasignación y convenciones de nomenclatura.

## Variables en JavaScript

### Declaración y Asignación
```js
var producto = 'Audifonos Gamer'; // Declarar una variable con un valor inicial

var disponible; // Declarar una variable sin asignarle valor inicial

disponible = true; // Asignar un valor posteriormente

var producto1 = 'Computadora',
    disponible = true,
    categoria = 'Computadora';
```

### Reglas y Convenciones

- **No se pueden usar nombres de variables que empiecen con un número**:
  ```js
  // var 1disponible; ❌ Esto generaría un error
  ```
- **Se pueden usar guiones bajos y mayúsculas para mejorar la legibilidad**:
  ```js
  var disponible_; // Válido
  ```

### Estilos de Nomenclatura

Diferentes estilos para nombrar variables:
```js
var nombre_producto = 'Monitor HD'; // Underscore (convención menos usada en JS)
var nombreProducto = 'Monitor HD'; // Camel Case (convención más común en JS)
var NombreProducto = 'Monitor HD'; // Pascal Case (usado en nombres de clases y constructores)
var nombreproducto = 'Monitor HD'; // Lower Case (no recomendado para mejorar legibilidad)
```

### Características Importantes de JavaScript

- **Es un lenguaje case-sensitive**:
  ```js
  console.log(PRODUCTO); // ❌ Esto generará un error si la variable declarada es 'producto'
  ```
- **Es un lenguaje de tipado dinámico**, lo que significa que una variable puede cambiar de tipo:
  ```js
  var producto = 'Audifonos Gamer'; // String
  producto = true; // Boolean
  ```

### Uso de `let` y `const`

Actualmente, `var` ha sido reemplazado en gran parte por `let` y `const` debido a sus mejoras en el control del alcance de las variables:
```js
let precio = 299; // Puede reasignarse, pero tiene un ámbito de bloque
const marca = 'Sony'; // No puede ser reasignada
```

---
Este repositorio es una recopilación de ejemplos para aprender y practicar JavaScript desde los conceptos básicos.
