import type { IsEqual } from "./IsEqual";

/**
 * Omits all **`readonly`** properties from **`T`**.
 *
 * ---
 * @template T The base type to be filtered.
 *
 * @example
 * type T = { readonly a: number; b: string; c?: boolean }
 * type A = OmitReadonly<T> // { b: string; c?: boolean }
 */
export type OmitReadonly<T> = {
  [K in keyof T as IsEqual< { [P in K]: T[P] }, { -readonly [P in K]: T[P] } > extends true
    ? K
    : never]: T[K];
};

