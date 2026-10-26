import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresa implements iEmpresa {
  private btAgregarObrero: HTMLButtonElement;
  private btAgregarAdministrativo: HTMLButtonElement;
  private lblNombreMayorAumento: HTMLElement;
  private lblTotalNominaNueva: HTMLElement;

  constructor() {
    this.btAgregarObrero = document.getElementById("body_btAgregarObrero") as HTMLButtonElement;
    this.btAgregarAdministrativo = document.getElementById("body_btAgregarAdministrativo") as HTMLButtonElement;
    this.lblNombreMayorAumento = document.getElementById("body_lblNombreMayorAumento") as HTMLElement;
    this.lblTotalNominaNueva = document.getElementById("body_lblTotalNominaNueva") as HTMLElement;
  }

  onNuevoObrero(callback: () => void): void {
    this.btAgregarObrero.onclick = callback;
  }

  onNuevoAdministrativo(callback: () => void): void {
    this.btAgregarAdministrativo.onclick = callback;
  }

  reportar({
    nombreMayorAumento,
    totalNominaNueva,
  }: {
    nombreMayorAumento: string;
    totalNominaNueva: number;
  }): void {
    this.lblNombreMayorAumento.innerHTML = nombreMayorAumento;
    this.lblTotalNominaNueva.innerHTML = `${totalNominaNueva}`;
  }
}
