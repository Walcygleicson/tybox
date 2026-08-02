import type { AnyFunction } from "./AnyFunction";

/**
 * Extracts the types of a function's parameters into a tuple, except for the last one. If the function has no parameters, the resulting type is an empty tuple.
 *
 * ---
 * @template T The target function.
 * @example
 * declare function withParams(a: number, b: string, c: boolean): any
 * type A = InitParameters<withParams> // [number, string]
 *
 * declare function noParams():any
 * type B = InitParameters<noParams> // []
 */
export type InitParameters<T extends AnyFunction> = Parameters<T> extends [...infer Rest, any] ? Rest : [];
