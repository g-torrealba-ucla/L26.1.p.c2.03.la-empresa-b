import mObrero from "./mObrero.js";
import mAdministrativo from "./mAdministrativo.js";

export default class mEmpresa {
  private acumNominaNueva: number = 0;
  private maxAumento: number = 0;
  private nombreMaxAumento: string = "";

  constructor() {
    this.acumNominaNueva = 0;
    this.maxAumento = 0;
    this.nombreMaxAumento = "";
  }

  procesarObrero(o: mObrero): void {
    this.acumNominaNueva += o.nuevoSueldo();
    if (o.aumento() > this.maxAumento) {
      this.maxAumento = o.aumento();
      this.nombreMaxAumento = o.nombre;
    }
  }

  procesarAdministrativo(a: mAdministrativo): void {
    this.acumNominaNueva += a.nuevoSueldo();
    if (a.aumento() > this.maxAumento) {
      this.maxAumento = a.aumento();
      this.nombreMaxAumento = a.nombre;
    }
  }

  nombreMayorAumento(): string {
    return this.nombreMaxAumento;
  }

  totalNominaNueva(): number {
    return this.acumNominaNueva;
  }
}
