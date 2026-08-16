/**
 * Removes the **`readonly`** modifier from all properties in **`T`,**
 * making them mutable.
 *
 * ---
 * @template T The target type.
 *
 * @example
 * type T = { readonly a: string; readonly b: number }
 *
 * type A = Mutable<T> // { a: string; b: number }
 */

export type Mutable<T> = { -readonly [K in keyof T]: T[K] };
