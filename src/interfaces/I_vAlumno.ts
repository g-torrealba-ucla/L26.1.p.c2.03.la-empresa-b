export interface I_vAlumno {
  get nombre(): string;
  get cedula(): number;
  get nota1(): number;
  get nota2(): number;
  get nota3(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
