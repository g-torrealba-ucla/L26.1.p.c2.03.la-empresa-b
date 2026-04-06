import { I_vAlumno } from "../interfaces/I_vAlumno.js";
import Cl_mAlumno from "../models/Cl_mEmpleado.js";

export default class Cl_cAlumno {
  private vista: I_vAlumno;
  private callback!: (alumno: Cl_mAlumno | null) => void;
  constructor(vista: I_vAlumno) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  // Método para que la Curso llame a este controlador
  solicitarAlumno(callback: (alumno: Cl_mAlumno | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new Cl_mAlumno({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        nota1: this.vista.nota1,
        nota2: this.vista.nota2,
        nota3: this.vista.nota3,
      }),
    );
    this.vista.ocultar();
  }
}
