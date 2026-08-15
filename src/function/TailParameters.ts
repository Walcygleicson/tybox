import type { AnyFunction } from "./AnyFunction";

/**
 * Creates a tuple containing the types of a function's parameters, except for the first one. If the function has no parameters, the resulting type is an empty tuple.
 *
 * ---
 * @template T The target function.
 * @example
 *
 * declare function withParams(a: number, b: string, c: boolean): any
 * type A = TailParameters<withParams> // [string, boolean]
 *
 * // No parameters:
 * declare function noParams(): any
 * type B = TailParameters<noParams> // []
 *
 */
export type TailParameters<T extends AnyFunction> = Parameters<T> extends [any, ...infer Rest] ? Rest : [];
