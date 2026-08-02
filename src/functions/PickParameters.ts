import type { AnyFunction } from "./AnyFunction";

/**
 * Extracts the types of a function's parameters based on the provided indices. If an index is out of scope, **`never`** is included.
 *
 * ---
 * @template T The target function
 * @template I Tuple of indices corresponding to the parameters.
 * @example
 * declare function fn(a: number, b: string, c: boolean): any
 *
 * type A = PickParameters<fn, [0, 2]> // [number, boolean]
 *
 * // Index out of scope:
 * type B = PickParameters<fn, [0, 10]> // [number, never]
 *
 */
export type PickParameters<T extends AnyFunction, I extends readonly number[]> = {
    [K in keyof I]: Parameters<T> extends { [N in I[K]]: infer P }
        ? P
        : never;
};
