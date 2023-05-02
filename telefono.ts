export class Telefono {
    private tipo: string;
    private numero: string;
  
    constructor(tipo: string, numero: string) {
      this.tipo = tipo;
      this.numero = numero;
    }
  
    getTipo(): string {
      return this.tipo;
    }
  
    setTipo(tipo: string): void {
      this.tipo = tipo;
    }
  
    getNumero(): string {
      return this.numero;
    }
  
    setNumero(numero: string): void {
      this.numero = numero;
    }
  }
  
  export default Telefono;
  