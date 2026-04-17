import I_vEmpresa from "../interfaces/I_vEmpresa";

export default class Cl_vEmpresa implements I_vEmpresa {
  lblNombreMayorAumento: HTMLSpanElement;
  lblTotalNominaNueva: HTMLSpanElement;
  btNuevoObrero: HTMLButtonElement;
  btNuevoAdministrativo: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoObrero = document.getElementById(
      "body_btAgregarObrero",
    ) as HTMLButtonElement;
    this.btNuevoAdministrativo = document.getElementById(
      "body_btAgregarAdministrativo",
    ) as HTMLButtonElement;
    this.lblNombreMayorAumento = document.getElementById(
      "body_lblNombreMayorAumento",
    ) as HTMLSpanElement;
    this.lblTotalNominaNueva = document.getElementById(
      "body_lblTotalNominaNueva",
    ) as HTMLSpanElement;
  }
  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoObrero.onclick = callback;
  }
  onNuevoAdministrativo(callback: () => void): void {
    this.btNuevoAdministrativo.onclick = callback;
  }
  reportar({ nombreMayorAumento, totalNominaNueva }: { nombreMayorAumento: string, totalNominaNueva: number }): void {
    this.lblNombreMayorAumento.innerHTML = `${nombreMayorAumento}`;
    this.lblTotalNominaNueva.innerHTML = `${totalNominaNueva}`
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
