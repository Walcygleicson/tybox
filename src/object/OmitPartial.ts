/**
 * Omits all optional properties from **`T`**.
 *
 * ---
 * @template T The base type to be filtered.
 * @example
 * type A = { a: string; b?: boolean; c?: number }
 *
 * type B = OmitPartial<A> // { a: string }
 */
export type OmitPartial<T> = {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
};
