import I_vEmpleado from "../interfaces/I_vEmpleado";

export default class Cl_vAdministrativo implements I_vEmpleado {
  inNombre: HTMLInputElement;
  inCedula: HTMLInputElement;
  inSueldoActual: HTMLInputElement;
  inHijos: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("administrativo") as HTMLElement;
    this.inNombre = document.getElementById(
      "administrativo_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "administrativo_inCedula",
    ) as HTMLInputElement;
    this.inSueldoActual = document.getElementById(
      "administrativo_inSueldoActual"
    ) as HTMLInputElement;
    this.inHijos = document.getElementById(
      "administrativo_inHijos"
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "administrativo_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "administrativo_btAceptar",
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
    return undefined;
  }
  get hijos(): number | undefined {
    return this.inHijos ? +this.inHijos.value : undefined;
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
    this.inHijos.value = "";
  }
}
