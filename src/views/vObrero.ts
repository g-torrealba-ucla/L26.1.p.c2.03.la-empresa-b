import { iObrero } from "../interfaces/iObrero.js";

export default class vObrero implements iObrero {
  private inNombre: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSueldoActual: HTMLInputElement;
  private inBono: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("obrero");
    this.inNombre = document.getElementById("obrero_inNombre") as HTMLInputElement;
    this.inCedula = document.getElementById("obrero_inCedula") as HTMLInputElement;
    this.inSueldoActual = document.getElementById("obrero_inSueldoActual") as HTMLInputElement;
    this.inBono = document.getElementById("obrero_inBono") as HTMLInputElement;
    this.btCancelar = document.getElementById("obrero_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("obrero_btAceptar") as HTMLButtonElement;
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
  get bono(): number {
    return +this.inBono.value;
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
      this.inBono.value = "";
      this.vista.hidden = false;
    }
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
