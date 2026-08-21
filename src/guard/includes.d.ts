import type { IsEqual } from "./is-equal"
import type { Head, Tail } from "../array"

/**
 * Compara cada membro da união **`Member`** com **`U`** e, se todos forem iguais retorna true, casa contrário never.
 * 
 */
type MemberEquals<Members, U> = Members extends any
  ? IsEqual<Members, U> extends true
    ? true
    : never
  : never;

/**
 * Tests whether an element **`U`** is included in an array/tuple and returns a boolean.
 * 
 * ---
 * @template T The target array/tuple to search.
 * @template U The element to be searched within **`T`**.
 * @category guard, array/tuple
 * 
 * @example
 * import type { Includes } from "tybox"
 * 
 * type A = Includes<[string, number, boolean], boolean> // true
 * type B = Includes<[string, ...number[]], number> // true
 * type C = Includes<[string, number?], number> // true
 * type D = Includes<[string, number?], undefined> // false
 * type E = Includes<[number, string, true], boolean> // false
 */
export type Includes<T extends readonly any[], U> = T extends readonly []
  ? false
  : number extends T['length'] // Só é verdadeiro quando o array é genuinamente aberto. Quando isso acontece, em vez de recursar, compara U contra a união de todos os tipos possíveis. Evita erro de recursão infinita para ...rest quando o elemento não é encontrado.
    ? [MemberEquals<T[number], U>] extends [never]
      ? false
      : true
    : IsEqual<Head<T>, U> extends true
      ? true
      : Includes<Tail<T>, U>;