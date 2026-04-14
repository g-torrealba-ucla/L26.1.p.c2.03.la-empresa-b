import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mObrero extends Cl_mEmpleado {
  _bono: number = 0;
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
    super({ nombre, cedula, sueldoActual });
    this.bono = bono;
  }
  set bono(bono: number) {
    this._bono = +bono;
  }
  get bono(): number {
    return this._bono;
  }
  get aumento(): number {
    return this.sueldoActual * 0.2 + this.bono * 2;
  }
}
