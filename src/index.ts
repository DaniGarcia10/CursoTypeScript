
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

enum EstadoTarea {"Pendiente", "EnProceso", "Terminada, Completada"};

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

//Activity 2
/**
 * Crea una función en tu proyecto que reciba como parámetro un string llamado "type" que tendrá como valor por defecto "SessionStorage",
 *  un string llamado "key", un array de objetos Tarea llamado "data" . El funcionamiento de dicha función debe ser el siguiente: 
 * dependiendo de si el valor del parámetro "type" es "session" o "local" se almacenará la información del array empleando el objeto "SessionStorage" o "LocalStorage". 
 * La información del parámetro data se almacenará usando la key pasada como parámetro
 * 
 * @param type Tipo de dato
 * @param key Clave
 * @param data Array de tareas
 */
function activity2(type: string = "Session Storage", key: string, data: Tarea[]) {

    if (type == "session") {
        sessionStorage.setItem(key, JSON.stringify(data));
        console.log("Se guardaron los datos en Session Storage");
    } else if (type == "local") {
        localStorage.setItem(key, JSON.stringify(data));
        console.log("Se guardaron los datos en Local Storage")
    }

}

//Activity 3
/**
 * Ejecuta la función anterior usando pasándole como parámetro el valor de type "session", un array de Tareas, y como clave "datos". Además, deberás ejecutar de nuevo la  función pasándole como parámetro el valor de type "local", un array de Tareas, y como clave "datos".
 */
activity2("session", "datos", [tarea1]);
activity2("local", "datos", [tarea1]);

//Activity 4
/**
 * Crea una función en tu proyecto que permita la recuperar la información almacenada en SessionStorage y LocalStorage. Dicha función debe recibir dos parámetros: type que será un string y tendrá como valor por defecto "session", y un string llamado "key". El funcionamiento de la función debe ser el siguiente: dependiendo el valor de type, si es "sessión" o "local", se recuperará la información empleando el objeto "SessionStorage" o "LocalStorage" y la key pasada como parámetro.
 */
function activity4(type: string = "session", key: string) {
    if (type == "session") {
        let data = sessionStorage.getItem(key);
        console.log(data);
    } else if (type == "local") {
        let data = localStorage.getItem(key);
        console.log(data);
    }
}
