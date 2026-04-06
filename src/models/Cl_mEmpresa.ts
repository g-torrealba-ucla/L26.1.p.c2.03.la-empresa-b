import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mEmpresa {
  private acNominaNueva: number = 0;
  private mayAumento: number = 0;
  private nombreMayAumento: string = "";

  procesarEmpleado(e: Cl_mEmpleado): void {
    this.acNominaNueva += e.nuevoSueldo;
    if (e.aumento > this.mayAumento) {
      this.mayAumento = e.aumento;
      this.nombreMayAumento = e.nombre;
    }
  }
  get nombreMayorAumento(): string {
    return this.nombreMayAumento;
  }
  get totalNominaNueva(): number {
    return this.acNominaNueva;
  }
}
