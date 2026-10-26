import { iAdministrativo } from "../interfaces/iAdministrativo.js";
import mAdministrativo from "../models/mAdministrativo.js";

export default class cAdministrativo {
  private vista: iAdministrativo;
  private callback!: (admin: mAdministrativo | null) => void;

  constructor(vista: iAdministrativo) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarAdministrativo(callback: (admin: mAdministrativo | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    this.callback(
      new mAdministrativo({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        sueldoActual: this.vista.sueldoActual,
        hijos: this.vista.hijos,
      }),
    );
    this.vista.ocultar();
  }
}
