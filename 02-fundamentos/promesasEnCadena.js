let empleados = [
    { id: 1, nombre: 'Nicolas' },
    { id: 2, nombre: 'Rebecca' },
    { id: 3, nombre: 'Juan' }
];

let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
];
// utilizando promesas
let getEmpleado = (id) => {
        return new Promise((resolve, reject) => {
            let empleadoDB = empleados.find(empleado => empleado.id === id);
            if (!empleadoDB) {
                reject(`No existe el empleado con el ID ${ id}`);
            } else {
                resolve(empleadoDB);
            }

        });
    }
    // tarea transformar en promesa

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No hay salario para el empleado ${ empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(3).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    })
    .catch(err => {
        console.log(err);
    })