import { iAdministrativo } from "../interfaces/iAdministrativo.js";

export default class vAdministrativo implements iAdministrativo {
  private inNombre: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSueldoActual: HTMLInputElement;
  private inHijos: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("administrativo");
    this.inNombre = document.getElementById("administrativo_inNombre") as HTMLInputElement;
    this.inCedula = document.getElementById("administrativo_inCedula") as HTMLInputElement;
    this.inSueldoActual = document.getElementById("administrativo_inSueldoActual") as HTMLInputElement;
    this.inHijos = document.getElementById("administrativo_inHijos") as HTMLInputElement;
    this.btCancelar = document.getElementById("administrativo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("administrativo_btAceptar") as HTMLButtonElement;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return +this.inCedula.value;
  }
  get sueldoActual(): number {
    return +this.inSueldoActual.value;
  }
  get hijos(): number {
    return +this.inHijos.value;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista) {
      this.inNombre.value = "";
      this.inCedula.value = "";
      this.inSueldoActual.value = "";
      this.inHijos.value = "";
      this.vista.hidden = false;
    }
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
