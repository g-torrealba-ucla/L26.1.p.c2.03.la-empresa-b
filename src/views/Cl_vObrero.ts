import I_vEmpleado from "../interfaces/I_vEmpleado";

export default class Cl_vObrero implements I_vEmpleado {
  inNombre: HTMLInputElement;
  inCedula: HTMLInputElement;
  inSueldoActual: HTMLInputElement;
  inBono: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("obrero") as HTMLElement;
    this.inNombre = document.getElementById(
      "obrero_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "obrero_inCedula",
    ) as HTMLInputElement;
    this.inSueldoActual = document.getElementById(
      "obrero_inSueldoActual"
    ) as HTMLInputElement;
    this.inBono = document.getElementById(
      "obrero_inBono"
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "obrero_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "obrero_btAceptar",
    ) as HTMLButtonElement;
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get sueldoActual(): number {
    return this.inSueldoActual ? +this.inSueldoActual.value : 0;
  }
  get bono(): number | undefined {
    return this.inBono ? +this.inBono.value : undefined;
  }
  get hijos(): number | undefined {
    return undefined;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
  limpiar(): void {
    this.inNombre.value = "";
    this.inCedula.value = "";
    this.inSueldoActual.value = "";
    this.inBono.value = "";
  }
}
