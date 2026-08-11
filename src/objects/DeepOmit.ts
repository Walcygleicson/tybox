/**
 * Igual ao **`Omit<T, K>`** nativo, mas remove as chaves recursivamente em
 * qualquer nível de aninhamento.
 * Preserva Function, Date e RegExp intactos (não desmonta suas propriedades).
 *
 * ---
 * @template T O tipo alvo.
 * @template K A chave a ser removida em todos os níveis. Suporta union de chaves.
 *
 * @example
 * interface T {
 *   a: string
 *   b: { a: number, b: boolean }
 *   c: { a: string, b: null, c: number}
 * }
 *
 * type A = DeepOmit<T, "a"> // {b: {b: boolean}, c: {b: null}} (Chaves "a" removidas)
 *
 * type B = DeepOmit<T, "a" | "b"> // {c: {c: number}} (Chaves "a" e "b" removidas)
 * 
 */
export type DeepOmit<T, K extends PropertyKey> = T extends
  Preserve
  ? T
  : T extends (infer U)[]
    ? DeepOmit<U, K>[]
    : T extends object
      ? { [P in keyof T as P extends K ? never : P]: DeepOmit<T[P], K> }
      : T;


type Preserve = Function | Date | RegExp