/**
 * Converte uma união de tipos em uma interseção.
 *
 * ---
 * @template U União de tipos.
 *
 * @example
* type B = UnionToIntersection<{a: number} | {b: string}> // {a: number} & {b: string}
* type A = UnionToIntersection<string | number> // never (⚠️ é esperado colapsar para never)
*/
export type UnionToIntersection<U> = ( U extends any ? (arg: U) => void : never ) extends (arg: infer I) => void
  ? I
  : never;
