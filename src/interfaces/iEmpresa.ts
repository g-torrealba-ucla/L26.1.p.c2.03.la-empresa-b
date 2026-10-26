export interface iEmpresa {
  onNuevoObrero(callback: () => void): void;
  onNuevoAdministrativo(callback: () => void): void;
  reportar({
    nombreMayorAumento,
    totalNominaNueva,
  }: {
    nombreMayorAumento: string;
    totalNominaNueva: number;
  }): void;
}
