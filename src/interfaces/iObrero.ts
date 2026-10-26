export interface iObrero {
  get nombre(): string;
  get cedula(): number;
  get sueldoActual(): number;
  get bono(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
