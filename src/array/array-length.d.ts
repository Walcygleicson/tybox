/**
 * Extracts the length of an array/tuple.
 * * For a variable length array, it always returns **`number`**.
 * * For a fixed-length tuple, it returns the numeric literal.
 * * For a tuple with an optional element, it returns a union of two numeric literals representing the two possible lengths.
 *
 * ---
 * @template T The target array/tuple.
 * @category Array
 *
 * @example
 * import type { ArrayLength } from "tybox"
 *
 * type A = ArrayLength<(string | number)[]> // number
 * type B = ArrayLength<[string, number]> // 2
 * type C = ArrayLength<[string, ...number[]]> // number (open length)
 * type D = ArrayLength<[string, number?]> // 1 | 2
 */
export type ArrayLength<T extends readonly unknown[]> = T['length'];
