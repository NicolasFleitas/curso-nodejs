let empleados = [
    { id: 1, nombre: 'Nicolas' },
    { id: 2, nombre: 'Rebecca' },
    { id: 3, nombre: 'Juan' }
];

let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
];
// copiado de promesasa para el uso de async y await
let getEmpleado = async(id) => {
        //return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            throw new Error(`No existe el empleado con el ID ${ id}`)
        } else {
            return empleadoDB;
        }
        //});
    }
    // copiado de promesas para utilizar con async y await

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No hay salario para el empleado ${ empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async(id) => {
        let empleado = await getEmpleado(id);
        let resp = await getSalario(empleado);
        return `${ resp.nombre } tiene un salario de ${ resp.salario }$`;
    }
    // utilizando async y await se reduce mucho el codigo
getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));