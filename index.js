//const estudiante1 = require('./archivo-requerido');
const {estudiante, obtenerPromedio} = require('./archivo-requerido');

//console.log(estudiante1.estudiante);
//console.log('El promedio del estudiante es: '+estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas, estudiante1.estudiante.notas.ingles, estudiante1.estudiante.notas.programacion));
//console.log(estudiante.nombre);
//console.log('El promedio del estudiante es: '+obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

let {nombre, edad, edad : aliasEdad, notas: {matematicas, ingles, programacion}} = estudiante;

console.log('nombre:'+nombre);
console.log('edad:'+edad);
console.log('edad usando alias: '+aliasEdad);
console.log('nota de matematicas: '+matematicas);
console.log('nota de ingles: '+ingles);
console.log('nota de programacion: '+programacion);
console.log('El promedio del estudiante es: '+obtenerPromedio(matematicas, ingles, programacion));
