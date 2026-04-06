import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEmpleado extends Cl_mPersona {
  private _sueldoActual: number = 0;

  constructor({
    nombre,
    cedula,
    sueldoActual,
  }: {
    nombre: string;
    cedula: number;
    sueldoActual: number;
  }) {
    super({ nombre, cedula });
    this.sueldoActual = sueldoActual;
  }
  set sueldoActual(value: number) {
    this._sueldoActual = value;
  }
  get sueldoActual(): number {
    return this._sueldoActual;
  }
  get aumento(): number {
    return 0;
  }
  get nuevoSueldo(): number {
    return this.sueldoActual + this.aumento;
  }
}
