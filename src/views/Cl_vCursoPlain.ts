import { I_vCurso } from "../interfaces/I_vCurso";

export default class Cl_vCursoPlain implements I_vCurso {
  lblNotaPromedio: HTMLInputElement;
  btNuevoAlumno: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoAlumno = document.getElementById(
      "body_btNuevoAlumno",
    ) as HTMLButtonElement;
    this.lblNotaPromedio = document.getElementById(
      "body_lblNotaPromedio",
    ) as HTMLInputElement;
  }
  onNuevoAlumno(callback: () => void): void {
    this.btNuevoAlumno.onclick = callback;
  }
  reportar({ notaPromedio }: { notaPromedio: number }): void {
    this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
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
