/**
 * LA EMPRESA B
 * Una empresa va a realizar un aumento de sueldo a sus empleados.
 * Se conoce de cada empleado: nombre, cedula, sueldo actual y tipo (1=obrero, 2=administrativo).
 * Si es obrero recibe un bono; el sueldo se aumentará en 20% y el bono se duplicará.
 * Si es administrativo, se conoce la cantidad de hijos; el nuevo sueldo será 10% más y bono de $10 por hijo.
 *
 * Se desea conocer:
 * - El nombre del empleado que recibirá el mayor aumento.
 * - El total de la nómina nueva.
 */

import mEmpresa from "../models/mEmpresa.js";
import { iEmpresa } from "../interfaces/iEmpresa.js";
import cObrero from "./cObrero.js";
import cAdministrativo from "./cAdministrativo.js";

export default class cEmpresa {
  private mEmpresa: mEmpresa = new mEmpresa();
  private vEmpresa: iEmpresa;
  private cObrero: cObrero;
  private cAdministrativo: cAdministrativo;

  constructor(
    vistaEmpresa: iEmpresa,
    controladorObrero: cObrero,
    controladorAdministrativo: cAdministrativo,
  ) {
    this.vEmpresa = vistaEmpresa;
    this.cObrero = controladorObrero;
    this.cAdministrativo = controladorAdministrativo;

    this.vEmpresa.onNuevoObrero(() => this.procesarObrero());
    this.vEmpresa.onNuevoAdministrativo(() => this.procesarAdministrativo());
  }

  private procesarObrero(): void {
    this.cObrero.solicitarObrero((obrero) => {
      if (obrero !== null) {
        this.mEmpresa.procesarObrero(obrero);
        this.reportar();
      }
    });
  }

  private procesarAdministrativo(): void {
    this.cAdministrativo.solicitarAdministrativo((admin) => {
      if (admin !== null) {
        this.mEmpresa.procesarAdministrativo(admin);
        this.reportar();
      }
    });
  }

  private reportar(): void {
    this.vEmpresa.reportar({
      nombreMayorAumento: this.mEmpresa.nombreMayorAumento(),
      totalNominaNueva: this.mEmpresa.totalNominaNueva(),
    });
  }
}
