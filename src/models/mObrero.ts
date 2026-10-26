export default class mObrero {
  private _nombre: string = "";
  private _cedula: number = 0;
  private _sueldoActual: number = 0;
  private _bono: number = 0;

  constructor({
    nombre,
    cedula,
    sueldoActual,
    bono,
  }: {
    nombre: string;
    cedula: number;
    sueldoActual: number;
    bono: number;
  }) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.sueldoActual = sueldoActual;
    this.bono = bono;
  }

  set nombre(nombre: string) {
    this._nombre = nombre.trim();
  }
  get nombre(): string {
    return this._nombre;
  }

  set cedula(cedula: number) {
    this._cedula = +cedula;
  }
  get cedula(): number {
    return this._cedula;
  }

  set sueldoActual(sueldoActual: number) {
    this._sueldoActual = +sueldoActual;
  }
  get sueldoActual(): number {
    return this._sueldoActual;
  }

  set bono(bono: number) {
    this._bono = +bono;
  }
  get bono(): number {
    return this._bono;
  }

  aumento(): number {
    return this.sueldoActual * 0.20 + this.bono * 2;
  }

  nuevoSueldo(): number {
    return this.sueldoActual + this.aumento();
  }
}
