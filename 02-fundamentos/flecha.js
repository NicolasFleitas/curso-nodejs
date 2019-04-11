// function sumar(a, b) {
//     return a + b
// }
// Ahora con una funcion de flecha
// let sumar = (a, b) => {
//     return a + b;
//}
// si el cuerpo de la funcion se puede escribir en una sola linea
// se puede escribir de la sgte manera
let sumar = (a, b) => a + b;
//console.log(sumar(10, 20));
// function saludar() {
//     return 'hola mundo';
// }
// funcion de flecha sin arg
//let saludar = () => 'Hola mundo!'
// funcion de flecha con un argumento
// let saludar = (nombre) => `Hola ${ nombre }`;
// console.log(saludar('Nico'));

// copiado de la destructuracion
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre} ${ this.apellido } - poder: ${ this.poder}`
    }
};
// si utilizamos this en una funcion 
// el objeto this apunta a un objeto vacio fuera de la funcion

console.log(deadpool.getNombre());