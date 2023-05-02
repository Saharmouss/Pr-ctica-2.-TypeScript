"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
// las personas
var persona1 = new Persona_1.Persona('Juan', 'García', 54, '1648378A', new Date(1975, 5, 23), 'amarillo', 'Hombre', [dir1], [mail1], [tel1]);
var persona2 = new Persona_1.Persona('Ana', 'Rodríguez', 29, '6784394Q', new Date(1993, 11, 7), 'rojo', 'Mujer', [dir2], [mail2], [tel2]);
var persona3 = new Persona_1.Persona('Pedro', 'Sanchez', 36, '34567890C', new Date(1990, 8, 10), 'verde', 'Hombre', [dir3], [mail3], [tel3]);
// las direcciones
var dir1 = new direccion_1.Direccion('Calle duque del valle', 3, '4º', 'A', '28381', 'Madrid', 'Madrid');
var dir2 = new direccion_1.Direccion('Avenida dos de mayo', 1, '2º', 'B', '28001', 'Madrid', 'Madrid');
var dir3 = new direccion_1.Direccion('Calle del zahara', 79, '1º', 'C', '41021', 'Sevilla', 'Sevilla');
//  mails
var mail1 = new mail_1.Mail('Personal', 'juan@gmail.com');
var mail2 = new mail_1.Mail('Trabajo', 'juan@empresa.com');
var mail3 = new mail_1.Mail('Otro', 'juan@hotmail.com');
// teléfonos
var tel1 = new telefono_1.Telefono('Móvil', '689043222');
var tel2 = new telefono_1.Telefono('Trabajo', '91874678');
var tel3 = new telefono_1.Telefono('Casa', '911542841');
// Mostrar las personas creadas
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
// Modificar un registro de persona
var personaMod = persona2.modificarDatos('6784394Q', [new direccion_1.Direccion('Calle sevilla Nueva', 10, '', '', '08002', 'Barcelona', 'Barcelona')], [new mail_1.Mail('Personal', 'ana@gmail.com'), new mail_1.Mail('Trabajo', 'ana@empresa.com')], [new telefono_1.Telefono('Móvil', '666222333')]);
// Mostrar las personas modificadas
console.log(persona1.toString());
console.log(personaMod.toString());
console.log(persona3.toString());
