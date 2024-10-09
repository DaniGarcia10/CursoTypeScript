/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/js-cookie/dist/js.cookie.js":
/*!**************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.js ***!
  \**************************************************/
/***/ (function(module) {

/*! js-cookie v3.0.5 | MIT */
;
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (name, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      name = encodeURIComponent(name)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        name + '=' + converter.write(value, name) + stringifiedAttributes)
    }

    function get (name) {
      if (typeof document === 'undefined' || (arguments.length && !name)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);

          if (name === found) {
            break
          }
        } catch (e) {}
      }

      return name ? jar[name] : jar
    }

    return Object.create(
      {
        set,
        get,
        remove: function (name, attributes) {
          set(
            name,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
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
 * Método que dependiendo del tipo pasado guarda los datos por parámetro en Session Storage o Local Storage
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
//Activity 6
/**
 * Crea una función del mismo estilo que las anteriores que permita borrar la información almacenada en SessiónStorage y LocalStorage. Solo debe recibir como parámetro un string llamado "type" y un string llamado "key". Ejecuta dicha función tantas veces como sea necesaria para borrar toda la información almacenada.
 */
function activity6(type, key) {
    if (type == "session") {
        sessionStorage.removeItem(key);
    }
    else if (type == "local") {
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
var js_cookie_1 = __importDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js"));
// Crear cookies
js_cookie_1.default.set('nombre', 'Dani', { expires: 7, path: '/' });
js_cookie_1.default.set('apellidos', 'Garcia', { expires: 2 });
js_cookie_1.default.set('email', 'dani@example.com', { expires: 4 });
// Recuperar cookies
var nombreCookie = js_cookie_1.default.get('nombre');
var apellidosCookie = js_cookie_1.default.get('apellidos');
var emailCookie = js_cookie_1.default.get('email');
console.log(nombreCookie, apellidosCookie, emailCookie);
// Borrar cookies
js_cookie_1.default.remove('nombre');
js_cookie_1.default.remove('apellidos');
js_cookie_1.default.remove('email');
// Intentar recuperar cookies después de borrarlas
nombreCookie = js_cookie_1.default.get('nombre');
apellidosCookie = js_cookie_1.default.get('apellidos');
emailCookie = js_cookie_1.default.get('email');
console.log(nombreCookie, apellidosCookie, emailCookie);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map