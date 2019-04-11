// var nombre = "Wolwerine" var permite la redeclaración y la variable obtiene el ultimo valor asignado
let nombre = "Wolwerine";
// con let no se puede redeclarar
if (true) {
    let nombre = "Magento"; // esta variable esta apuntando a otro lugar en memoria
}

console.log(nombre);
//cambiar let por var para ver los resultados

let i = 'Hola!';

for (let i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
    //con let solo existe en este scope

}
console.log(i);