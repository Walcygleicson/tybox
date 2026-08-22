import type { ArrayLength } from "../array";

/**
 * Valida se um array é uma tupla (considera apenas tuplas de comprimento fixo definido) e retorna um boolean.
 * 
 * ---
 * @template T O array/tupla para validação.
 * @category Array
 * 
 * @example
 * import type { IsTuple } from "tybox"
 * 
 * type A = IsTuple<[string, number]> // true
 * type B = IsTuple<(string | number)[]> // false
 * type C = IsTuple<[string, ...number[]]> // false (comprimento variável)
 * type D = IsTuple<[string, number?]> // true
 */
export type IsTuple<T extends readonly unknown[]> = number extends ArrayLength<T> ? false : true;
