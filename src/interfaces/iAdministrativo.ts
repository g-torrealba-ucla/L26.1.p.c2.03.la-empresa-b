export interface iAdministrativo {
  get nombre(): string;
  get cedula(): number;
  get sueldoActual(): number;
  get hijos(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
