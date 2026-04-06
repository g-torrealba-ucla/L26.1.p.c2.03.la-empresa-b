export default class Cl_mPersona {
  private _nombre: string = "";
  private _cedula: number = 0;
  constructor({ nombre, cedula }: { nombre: string; cedula: number }) {
    this.nombre = nombre;
    this.cedula = cedula;
  }
  get nombre(): string {
    return this._nombre;
  }
  set nombre(value: string) {
    this._nombre = value;
  }
  get cedula(): number {
    return this._cedula;
  }
  set cedula(value: number) {
    this._cedula = value;
  }
}
