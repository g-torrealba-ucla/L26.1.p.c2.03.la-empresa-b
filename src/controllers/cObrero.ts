import { iObrero } from "../interfaces/iObrero.js";
import mObrero from "../models/mObrero.js";

export default class cObrero {
  private vista: iObrero;
  private callback!: (obrero: mObrero | null) => void;

  constructor(vista: iObrero) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarObrero(callback: (obrero: mObrero | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    this.callback(
      new mObrero({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        sueldoActual: this.vista.sueldoActual,
        bono: this.vista.bono,
      }),
    );
    this.vista.ocultar();
  }
}
