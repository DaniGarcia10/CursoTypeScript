
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
 * Método que dependiendo del tipo pasado guarda los datos por parámetro en Session Storage o Local Storage
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

//Activity 5
/**
 * Recupera la información almacenada en el navegador y muestrala por consola.
 */
activity4("session", "datos");
activity4("local", "datos");

//Activity 6
/**
 * Crea una función del mismo estilo que las anteriores que permita borrar la información almacenada en SessiónStorage y LocalStorage. Solo debe recibir como parámetro un string llamado "type" y un string llamado "key". Ejecuta dicha función tantas veces como sea necesaria para borrar toda la información almacenada.
 */
function activity6(type: string, key: string) {
    if (type == "session") {
        sessionStorage.removeItem(key);
    } else if (type == "local") {
        localStorage.removeItem(key);
    }
}

activity6("session", "datos");
activity6("local", "datos");

//Activity 7
/**
 * Instala el módulo "js-cookie" tal y como se indica en el archivo index.ts del proyecto del profesor y emplea este módulo para almacenar, recuperar y borrar datos del navegador.
Crea una cookie llamada nombre con tu nombre que expire a los 7 días y sea accesible desde el path /
Crea una cookie llamada apellidos con tu apellido que expire a los 2 días
Crea una cookie llamada email con un email que expire a los 4 días.
Recupera todas las cookies anteriores.
Borra todas las cookies anteriores
 */
import Cookies from 'js-cookie';

// Crear cookies
Cookies.set('nombre', 'Dani', { expires: 7, path: '/' });
Cookies.set('apellidos', 'Garcia', { expires: 2 });
Cookies.set('email', 'dani@example.com', { expires: 4 });

// Recuperar cookies
let nombreCookie = Cookies.get('nombre');
let apellidosCookie = Cookies.get('apellidos');
let emailCookie = Cookies.get('email');
console.log(nombreCookie, apellidosCookie, emailCookie);

// Borrar cookies
Cookies.remove('nombre');
Cookies.remove('apellidos');
Cookies.remove('email');

// Intentar recuperar cookies después de borrarlas
nombreCookie = Cookies.get('nombre');
apellidosCookie = Cookies.get('apellidos');
emailCookie = Cookies.get('email');
console.log(nombreCookie, apellidosCookie, emailCookie);