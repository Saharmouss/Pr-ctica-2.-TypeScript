"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    Persona.prototype.getCumpleanos = function () {
        return this.cumpleanos;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.setDNI = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.setCumpleanos = function (cumpleanos) {
        this.cumpleanos = cumpleanos;
    };
    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.setDirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };
    Persona.prototype.setMails = function (mails) {
        this.mails = mails;
    };
    Persona.prototype.setTelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };
    Persona.prototype.modificarDatos = function (nuevoDni, nuevasDirecciones, nuevosMails, nuevosTelefonos) {
        this.dni = nuevoDni;
        this.direcciones = nuevasDirecciones;
        this.mails = nuevosMails;
        this.telefonos = nuevosTelefonos;
        return this;
    };
    return Persona;
}());
exports.Persona = Persona;
