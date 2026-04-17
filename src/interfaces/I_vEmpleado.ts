export default interface I_vEmpleado {
  get nombre(): string;
  get cedula(): number;
  get sueldoActual(): number;
  get bono(): number | undefined;
  get hijos(): number | undefined;
  mostrar(): void;
  ocultar(): void;
  limpiar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
