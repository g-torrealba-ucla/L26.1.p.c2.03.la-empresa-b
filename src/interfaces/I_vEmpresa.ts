// src/interfaces/I_vEmpresa.ts
export default interface I_vEmpresa {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoEmpleado(callback: () => void): void;
  onNuevoAdministrativo(callback: () => void): void;
  reportar({ nombreMayorAumento, totalNominaNueva }: { nombreMayorAumento: string, totalNominaNueva: number }): void;
}
