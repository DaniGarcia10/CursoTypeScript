/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


/**
 * string
 * number - enteros y decimales
 * boolean - true o false
 * null
 * undefined
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nombre = "Dani"; // Variable global
var apellido = "Garcia"; // Variable local
var PI = 3.1415; // Constante
console.log("Hola " + nombre + " " + apellido);
console.log(nombre, apellido);
console.log("Hola ".concat(nombre));
// ARRAYS
var nombres = ["Dani", "Juan", "Pedro"];
var valores = [1, 2, 3, 4, 5];
var datos = ["Dani", 1, "Juan", 2];
var alumnos1A = ["Dani", "Juan", "Pedro"];
var alumnos2A = ["Dani", "Juan"];
var alumnos = __spreadArray(__spreadArray(__spreadArray([], alumnos1A, true), alumnos2A, true), ["Pablo"], false);
console.log(alumnos);
//OBJETOS
var misDatos = {
    nombre: "Dani",
    apellido: "Garcia",
    edad: 26
};
var configuracion = __assign({ versionTS: "Es6", versionCodigo: 1.0 }, misDatos);
console.log(configuracion);
var propiedad1 = configuracion.versionTS;
var propiedad2 = configuracion.versionCodigo;
console.log(propiedad1, propiedad2);
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea[EstadoTarea["Pendiente"] = 0] = "Pendiente";
    EstadoTarea[EstadoTarea["EnProceso"] = 1] = "EnProceso";
    EstadoTarea[EstadoTarea["Terminada, Completada"] = 2] = "Terminada, Completada";
})(EstadoTarea || (EstadoTarea = {}));
;
var estadoPendiente = EstadoTarea.Pendiente;
console.log(estadoPendiente);
var tarea1 = {
    nombre: "Tarea1",
    prioridad: 2,
    estado: EstadoTarea.Pendiente
};
var empleado1 = {
    nombre: "Dani",
    edad: 26,
    sueldo: 20000
};
console.log(empleado1);
var empleado3;
empleado3 = {
    nombre: "Juan",
    edad: 30,
    sueldo: 30000,
    fotocopia: 100
};
console.log(empleado3);
console.log(tarea1.estado === 0 ? "La tarea ".concat(tarea1.nombre, " est\u00E1 pendiente") : "La tarea ".concat(tarea1.nombre, " est\u00E1 en proceso"));
// IF-ELSE
if (tarea1.estado === 0) {
    console.log("La tarea ".concat(tarea1.nombre, " est\u00E1 pendiente"));
}
else if (tarea1.estado === 1) {
    console.log("La tarea ".concat(tarea1.nombre, " est\u00E1 en proceso"));
}
else {
    console.log("La tarea ".concat(tarea1.nombre, " est\u00E1 terminada"));
}
// SWITCH
switch (tarea1.estado) {
    case 0:
        console.log("La tarea ".concat(tarea1.nombre, " est\u00E1 pendiente"));
        break;
    case 1:
        console.log("La tarea ".concat(tarea1.nombre, " est\u00E1 en proceso"));
        break;
    case 2:
        console.log("La tarea ".concat(tarea1.nombre, " est\u00E1 terminada"));
        break;
    default:
        console.log("La tarea ".concat(tarea1.nombre, " no tiene estado"));
        break;
}
//TRY CATCH
try {
    var numero1 = 1;
    console.log(numero1.toString());
}
catch (error) {
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
function activity2(type, key, data) {
    if (type === void 0) { type = "Session Storage"; }
    if (type == "session") {
        sessionStorage.setItem(key, JSON.stringify(data));
        console.log("Se guardaron los datos en Session Storage");
    }
    else if (type == "local") {
        localStorage.setItem(key, JSON.stringify(data));
        console.log("Se guardaron los datos en Local Storage");
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
function activity4(type, key) {
    if (type === void 0) { type = "session"; }
    if (type == "session") {
        var data = sessionStorage.getItem(key);
        console.log(data);
    }
    else if (type == "local") {
        var data = localStorage.getItem(key);
        console.log(data);
    }
}
//Activity 5
/**
 * Recupera la información almacenada en el navegador y muestrala por consola.
 */
activity4("session", "datos");
activity4("local", "datos");
// Simulación de sessionStorage y localStorage en Node.js
var SimulacionsessionStorage = /** @class */ (function () {
    function SimulacionsessionStorage() {
        this.store = {};
    }
    SimulacionsessionStorage.prototype.setItem = function (key, value) {
        this.store[key] = value;
    };
    SimulacionsessionStorage.prototype.getItem = function (key) {
        return this.store[key] || null;
    };
    SimulacionsessionStorage.prototype.removeItem = function (key) {
        delete this.store[key];
    };
    SimulacionsessionStorage.prototype.clear = function () {
        this.store = {};
    };
    return SimulacionsessionStorage;
}());
// Crear instancias simuladas de sessionStorage y localStorage
var simulatedSessionStorage = new Storage();
var simulatedLocalStorage = new Storage();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map