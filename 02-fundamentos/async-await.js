// Async Await

let getNombre = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve('Nicolas');

            }, 3000);
        });
    }
    // usando async se transforma en una promesa

// let getNombre = async() => {
//   //  throw new Error('No existe un nombre para ese usuario');
//     return 'Nicolas';
// };

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}

// getNombre().then(nombre => {
//         console.log(nombre);
//     })
//     .catch(e => {
//         console.log('Error de ASYNC', e);
//     })

saludo().then(mensaje => {
    console.log(mensaje);
})