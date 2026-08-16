/**
 * Tipos utilitários para objetos.
 */
export declare namespace O {
  /** Objeto simples com duas propriedade */
  type Simple = { required: any, optional?: any }
  /** Objeto com todas as propriedades obrigatórias */
  type AllRequired = { a: string, b: number, c: boolean }
  /** Objeto com todas as propriedades opcionais */
  type AllPartial = { a?: string, b?: number, c?: boolean }
  /** Objeto com a propriedade **`o`** aninhada. */
  type Nestled = {
    a: string
    b: number
    o: { required: any; optional?: any }
  }
}