
import { Persona } from './Persona';
import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';


// las personas
const persona1 = new Persona('Juan', 'García', 54, '1648378A', new Date(1975, 5, 23), 'amarillo', 'Hombre', [dir1], [mail1], [tel1]);
const persona2 = new Persona('Ana', 'Rodríguez', 29, '6784394Q', new Date(1993, 11, 7), 'rojo', 'Mujer', [dir2], [mail2], [tel2]);
const persona3 = new Persona('Pedro', 'Sanchez', 36, '34567890C', new Date(1990, 8, 10), 'verde', 'Hombre', [dir3], [mail3], [tel3]);

// las direcciones
const dir1 = new Direccion('Calle duque del valle', 3, '4º', 'A', '28381', 'Madrid', 'Madrid');
const dir2 = new Direccion('Avenida dos de mayo', 1, '2º', 'B', '28001', 'Madrid', 'Madrid');
const dir3 = new Direccion('Calle del zahara', 79, '1º', 'C', '41021', 'Sevilla', 'Sevilla');

//  mails
const mail1 = new Mail('Personal', 'juan@gmail.com');
const mail2 = new Mail('Trabajo', 'juan@empresa.com');
const mail3 = new Mail('Otro', 'juan@hotmail.com');

// teléfonos
const tel1 = new Telefono('Móvil', '689043222');
const tel2 = new Telefono('Trabajo', '91874678');
const tel3 = new Telefono('Casa', '911542841');


// Mostrar las personas creadas
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

// Modificar un registro de persona
const personaMod = persona2.modificarDatos('6784394Q', [new Direccion('Calle sevilla Nueva', 10, '', '', '08002', 'Barcelona', 'Barcelona')], [new Mail('Personal', 'ana@gmail.com'), new Mail('Trabajo', 'ana@empresa.com')], [new Telefono('Móvil', '666222333')]);

// Mostrar las personas modificadas
console.log(persona1.toString());
console.log(personaMod.toString());
console.log(persona3.toString());
