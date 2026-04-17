import I_vEmpleado from "../interfaces/I_vEmpleado.js";
import Cl_mObrero from "../models/Cl_mObrero.js";

export default class Cl_cObrero {
  private vista: I_vEmpleado;
  private callback!: (empleado: Cl_mObrero | null) => void;
  constructor(vista: I_vEmpleado) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  // Método para que la Curso llame a este controlador
  solicitarAlumno(callback: (empleado: Cl_mObrero | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new Cl_mObrero({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        sueldoActual: this.vista.sueldoActual,
        bono: this.vista.bono || 0,
      }),
    );
    this.vista.limpiar();
    this.vista.ocultar();
  }
}
