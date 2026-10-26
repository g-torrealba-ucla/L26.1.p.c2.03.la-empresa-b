export default class mAdministrativo {
  private _nombre: string = "";
  private _cedula: number = 0;
  private _sueldoActual: number = 0;
  private _hijos: number = 0;

  constructor({
    nombre,
    cedula,
    sueldoActual,
    hijos,
  }: {
    nombre: string;
    cedula: number;
    sueldoActual: number;
    hijos: number;
  }) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.sueldoActual = sueldoActual;
    this.hijos = hijos;
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

  set hijos(hijos: number) {
    this._hijos = +hijos;
  }
  get hijos(): number {
    return this._hijos;
  }

  aumento(): number {
    return this.sueldoActual * 0.10 + this.hijos * 10;
  }

  nuevoSueldo(): number {
    return this.sueldoActual + this.aumento();
  }
}
