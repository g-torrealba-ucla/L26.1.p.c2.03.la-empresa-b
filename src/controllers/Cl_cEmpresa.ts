/**
 * LA EMPRESA
 * Una empresa va a realizar un aumento de sueldo a sus empleados.
 * Se conoce de cada empleado: nombre, cedula, sueldo actual 
 * y tipo (1=obrero, 2=administrativo).
 * Si es un obrero actualmente recibe un bono; el sueldo se 
 * aumentará en 20% y el bono se duplicará.
 * Si es administrativo, se conoce la cantidad de hijos; el 
 * nuevo sueldo será un 10% más de su sueldo actual y un bono de $10 por hijo.
 *
 * Se desea conocer:
 * - El nombre del empleado que recibirá el mayor aumento.
 * - El total de la nómina nueva.
 * 
 * Considere que la clase empleado hereda de una clase persona
 */

import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import I_vEmpresa from "../interfaces/I_vEmpresa.js";
import I_vEmpleado from "../interfaces/I_vEmpleado.js";
import Cl_cAdministrativo from "./Cl_cAdministrativo.js";
import Cl_cObrero from "./Cl_cObrero.js";

export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: I_vEmpresa;
  private cAdministrativo: Cl_cAdministrativo;
  private cObrero: Cl_cObrero;
  private vObrero: I_vEmpleado;
  private vAdministrativo: I_vEmpleado;

  // Recibe la vista de la empresa, las vistas y los controladores ya armados
  constructor(vistaEmpresa: I_vEmpresa, vistaObrero: I_vEmpleado, vistaAdministrativo: I_vEmpleado, controladorObrero: Cl_cObrero, controladorAdministrativo: Cl_cAdministrativo) {
    this.vEmpresa = vistaEmpresa;
    this.vObrero = vistaObrero;
    this.vAdministrativo = vistaAdministrativo;
    this.cObrero = controladorObrero;
    this.cAdministrativo = controladorAdministrativo;

    this.vEmpresa.onNuevoEmpleado(() => this.procesarObrero());
    this.vEmpresa.onNuevoAdministrativo(() => this.procesarAdministrativo());
  }

  private procesarObrero() {
    this.vAdministrativo.ocultar();
    this.cObrero.solicitarAlumno((empleado) => {
      if (empleado !== null) {
        this.mEmpresa.procesarEmpleado(empleado);
        this.vEmpresa.reportar({ nombreMayorAumento: this.mEmpresa.nombreMayorAumento, totalNominaNueva: this.mEmpresa.totalNominaNueva });
      }
    });
  }

  private procesarAdministrativo() {
    this.vObrero.ocultar();
    this.cAdministrativo.solicitarAlumno((empleado) => {
      if (empleado !== null) {
        this.mEmpresa.procesarEmpleado(empleado);
        this.vEmpresa.reportar({ nombreMayorAumento: this.mEmpresa.nombreMayorAumento, totalNominaNueva: this.mEmpresa.totalNominaNueva });
      }
    });
  }
}
