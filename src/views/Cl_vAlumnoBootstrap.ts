import { I_vAlumno } from "../interfaces/I_vAlumno.js";
declare var bootstrap: any;

export default class Cl_vAlumnoBootstrap implements I_vAlumno {
  inNombre: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  inCedula: HTMLInputElement;
  inNota1: HTMLInputElement;
  inNota2: HTMLInputElement;
  inNota3: HTMLInputElement;
  private modal: any;

  constructor() {
    this.vista = document.getElementById("alumno") as HTMLElement;
    this.inNombre = document.getElementById(
      "alumno_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "alumno_inCedula",
    ) as HTMLInputElement;
    this.inNota1 = document.getElementById(
      "alumno_inNota1",
    ) as HTMLInputElement;
    this.inNota2 = document.getElementById(
      "alumno_inNota2",
    ) as HTMLInputElement;
    this.inNota3 = document.getElementById(
      "alumno_inNota3",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "alumno_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "alumno_btAceptar",
    ) as HTMLButtonElement;
    const elementoModal = document.getElementById("alumno");
    this.modal = new bootstrap.Modal(elementoModal);
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get nota1(): number {
    return this.inNota1 ? +this.inNota1.value : 0;
  }
  get nota2(): number {
    return this.inNota2 ? +this.inNota2.value : 0;
  }
  get nota3(): number {
    return this.inNota3 ? +this.inNota3.value : 0;
  }
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
  mostrar(): void {
    this.inNombre.value = ""; 
    this.inCedula.value = "";
    this.inNota1.value = "";
    this.inNota2.value = "";
    this.inNota3.value = "";
    this.modal.show();
  }
  ocultar(): void {
    this.modal.hide();
  }
}
