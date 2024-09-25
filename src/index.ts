console.log("Hola mundo");

/**
 * string
 * number - enteros y decimales
 * boolean - true o false
 * null
 * undefined
 */

var nombre:string = "Dani"; // Variable global
let apellido:string = "Garcia"; // Variable local
const PI:number = 3.1415; // Constante

console.log("Hola " + nombre + " " + apellido);
console.log(nombre, apellido);
console.log(`Hola ${nombre}`);


// ARRAYS
let nombres:string[] = ["Dani", "Juan", "Pedro"];
let valores:number[] = [1, 2, 3, 4, 5];
let datos:(string | number)[] = ["Dani", 1, "Juan", 2];

let alumnos1A:string[] = ["Dani", "Juan", "Pedro"];
let alumnos2A:string[]= ["Dani", "Juan"];
let alumnos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"];
console.log(alumnos);