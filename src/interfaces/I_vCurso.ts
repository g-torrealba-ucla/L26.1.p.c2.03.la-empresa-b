// src/interfaces/I_vCurso.ts
export interface I_vCurso {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoAlumno(callback: () => void): void;
  reportar({ notaPromedio }: { notaPromedio: number}): void;
}
