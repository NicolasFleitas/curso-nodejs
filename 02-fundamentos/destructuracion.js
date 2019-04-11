let deadpool = {
        nombre: 'Wade',
        apellido: 'Winston',
        poder: 'Regeneracion',
        getNombre: function() {
            return `${ this.nombre} ${ this.apellido } - poder: ${ this.poder}`
        }
    }
    //console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;
// Estas declaraciones se pueden realizar en una linea

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);