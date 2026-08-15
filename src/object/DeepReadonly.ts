import type { NonRecursive } from "../__internal__";

/**
 * Recursively makes all fields of a type **`readonly`**.
 *
 * ---
 * @example
 * type A = { x: number, y: { z: string[] } }
 *
 * type B = DeepReadonly<A> // { readonly x: number, readonly y: { readonly z: string[] } }
 */
export type DeepReadonly<T> = T extends NonRecursive
  ? T
  : T extends readonly [infer Head, ...infer Rest]
    ? readonly [DeepReadonly<Head>, ...DeepReadonly<Rest>]
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepReadonly<U>>
      : T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
        : T;
