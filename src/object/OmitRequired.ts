import type { IsRequiredKey } from "./IsRequiredKey"

/**
 * Omits all required properties from **`T`**.
 *
 * ---
 * @template T The base type to be filtered.
 * @example
 * type A = { a: string; b: boolean; c?: number }
 * 
 * type B = OmitRequired<A> // { c?: number }
 */
export type OmitRequired<T> = { [K in keyof T as IsRequiredKey<T, K> extends false ? K : never]: T[K] }
