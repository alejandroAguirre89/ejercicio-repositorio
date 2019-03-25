let estudiante = {
    nombre: 'Erika',
    edad: 24,
    notas: {
        matematicas: 4,
        ingles: 4,
        programacion: 3
    }
}

let obtenerPromedio = (notaUno, notaDos, notaTres) => (notaUno + notaDos + notaTres)/3;

//console.log(obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

module.exports = {
    estudiante,
    obtenerPromedio
};