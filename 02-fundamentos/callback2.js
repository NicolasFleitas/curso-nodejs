let empleados = [
    { id: 1, nombre: 'Nicolas' },
    { id: 2, nombre: 'Rebecca' },
    { id: 3, nombre: 'Juan' }
];

let salarios = [
    { id: 1, salario: 1000 }, { id: 2, salario: 2000 }
];
// FUNCION PARA OBTENER EL EMPLEADO
let getEmpleado = (id, callback) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            callback(`No existe el empleado con el ID ${ id}`);
        } else {
            callback(null, empleadoDB);
        }
    }
    //FUNCION PARA OBTENER SALARIOS

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No hay salario para el empleado ${ empleado.id}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}


//llamando a la funcion y enviando parametros
getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
        //console.log(empleado); 
    })
});
//llamada a la funcion de salarios arriba
//tarea Nombre: melissa,
//salario: 3000