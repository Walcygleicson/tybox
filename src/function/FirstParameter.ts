import type { AnyFunction } from "./AnyFunction";

/**
 * Extracts the type of a function's first parameter. If the function has no parameters, the resulting type is **`never`**.
 *
 * ---
 * @template T The target function.
 *
 * @example
 * function withParams(a: number, b: string, c: boolean) {}
 * type A = FirstParameter<typeof withParams> // number
 *
 * // No parameters function:
 * function noParams() {}
 * type B = FirstParameter<typeof noParams> // never
 */
export type FirstParameter<T extends AnyFunction> = Parameters<T> extends [infer First, ...any[]] ? First : never;

