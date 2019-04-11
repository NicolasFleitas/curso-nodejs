// setTimeout(() => {
//     console.log('Hola en 3seg');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Nicolas',
        id //en ECMA6 usar id: id  es redundante
    }

    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe en la bd`)
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos:', usuario);
}); // en caso que el id no exista
// es muy comun que el primer parametro de un callback es un error