console.log('Inicio del programa');
// Los settimeout es una funcion 
// que va a ejecutar algo(callbacks) en un 
// determinado tiempo
// 
setTimeout(function() {
    console.log('Primer TimeOut');
}, 3000);

setTimeout(function() {
    console.log('Segundo TimeOut');
}, 0);

setTimeout(function() {
    console.log('Tercer TimeOut');
}, 0);

console.log('Fin del programa');