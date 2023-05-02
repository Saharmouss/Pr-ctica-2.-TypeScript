import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleanos: Date;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
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

  public getNombre(): string {
    return this.nombre;
  }

  public getApellidos(): string {
    return this.apellidos;
  }

  public getEdad(): number {
    return this.edad;
  }

  public getDNI(): string {
    return this.dni;
  }

  public getCumpleanos(): Date {
    return this.cumpleanos;
  }

  public getColorFavorito(): string {
    return this.colorFavorito;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  public getMails(): Mail[] {
    return this.mails;
  }

  public getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  public getNotas(): string {
    return this.notas;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setApellidos(apellidos: string): void {
    this.apellidos = apellidos;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }

  public setDNI(dni: string): void {
    this.dni = dni;
  }

  public setCumpleanos(cumpleanos: Date): void {
    this.cumpleanos = cumpleanos;
  }

  public setColorFavorito(colorFavorito: string): void {
    this.colorFavorito = colorFavorito;
  }

  public setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  public setDirecciones(direcciones: Direccion[]): void {
    this.direcciones = direcciones;
  }

  public setMails(mails: Mail[]): void {
    this.mails = mails;
  }

  public setTelefonos(telefonos: Telefono[]): void {
    this.telefonos = telefonos;
  }

  public modificarDatos(nuevoDni: string, nuevasDirecciones: Direccion[], nuevosMails: Mail[], nuevosTelefonos: Telefono[]): Persona {
    this.dni = nuevoDni;
    this.direcciones = nuevasDirecciones;
    this.mails = nuevosMails;
    this.telefonos = nuevosTelefonos;
    return this;
  }
}
