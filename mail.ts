export class Mail {
    private type: string;
    private address: string;
  
    constructor(type: string, address: string) {
      this.type = type;
      this.address = address;
    }
  
    getType(): string {
      return this.type;
    }
  
    getAddress(): string {
      return this.address;
    }
  
    setType(type: string): void {
      this.type = type;
    }
  
    setAddress(address: string): void {
      this.address = address;
    }
  }
  
  export default Mail;
  