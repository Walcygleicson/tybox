import type{ NonRecursive } from "../__internal__";

/**
 * Makes all properties of an object deeply optional. Types that are not "*`Record<string, unknown>`*" are not broken.
 *
 * ---
 * @template T The target type.
 *
 * @example
 *
 * type A = { x: { name: string, age: number } }
 *
 * type B = DeepPartial<A> // { x?: { name?: string, age?: number } }
 */
export type DeepPartial<T> = T extends NonRecursive
  ? T
  : T extends readonly unknown[]
    ? T
    : T extends object
      ? { [P in keyof T]?: DeepPartial<T[P]> }
      : T;

