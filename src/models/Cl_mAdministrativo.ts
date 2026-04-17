import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mAdministrativo extends Cl_mEmpleado {
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
    super({ nombre, cedula, sueldoActual });
    this.hijos = hijos;
  }
  set hijos(hijos: number) {
    this._hijos = hijos;
  }
  get hijos(): number {
    return this._hijos;
  }
  get aumento(): number {
    return this.sueldoActual * 0.1 + this.hijos * 10;
  }
}
