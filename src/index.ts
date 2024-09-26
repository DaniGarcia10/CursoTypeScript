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


//OBJETOS
let misDatos = {
    nombre: "Dani",
    apellido: "Garcia",
    edad: 26
}

let configuracion = {
    versionTS: "Es6",
    versionCodigo: 1.0,
    ...misDatos
}

console.log(configuracion);


let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;
console.log(propiedad1, propiedad2);

enum EstadoTarea {"Pendiente", "EnProceso", "Terminada"};

let estadoPendiente = EstadoTarea.Pendiente;
console.log(estadoPendiente);

interface Tarea {
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

let tarea1:Tarea = {
    nombre: "Tarea1",
    prioridad: 2,
    estado: EstadoTarea.Pendiente
}

type Empleado = {
    nombre:string,
    edad:number
    sueldo:number
}

let empleado1:Empleado = {
    nombre: "Dani",
    edad: 26,
    sueldo: 20000
}

console.log(empleado1);

type Administrativo = {
    fotocopia:number
}

let empleado3:Empleado & Administrativo;
empleado3 = {
    nombre: "Juan",
    edad: 30,
    sueldo: 30000,
    fotocopia: 100
}
console.log(empleado3);

console.log(tarea1.estado === 0 ? `La tarea ${tarea1.nombre} está pendiente` : `La tarea ${tarea1.nombre} está en proceso`);

// IF-ELSE
if (tarea1.estado === 0) {
    console.log(`La tarea ${tarea1.nombre} está pendiente`);
} else if (tarea1.estado === 1) {
    console.log(`La tarea ${tarea1.nombre} está en proceso`);
} else {
    console.log(`La tarea ${tarea1.nombre} está terminada`);
}

// SWITCH
switch (tarea1.estado) {
    case 0:
        console.log(`La tarea ${tarea1.nombre} está pendiente`);
        break;
    case 1:
        console.log(`La tarea ${tarea1.nombre} está en proceso`);
        break;
    case 2:
        console.log(`La tarea ${tarea1.nombre} está terminada`);
        break;
    default:
        console.log(`La tarea ${tarea1.nombre} no tiene estado`);
        break;
}

//TRY CATCH
try {
    let numero1:number = 1;
    console.log(numero1.toString())
} catch (error) {
    console.log("Ha ocurrido un error al convertir el numero a string");
}
