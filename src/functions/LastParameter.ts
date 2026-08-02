import type { AnyFunction } from "./AnyFunction";
/**
 * Extracts the type of the last parameter of a function. If the function has no parameters, the resulting type is **`never`**.
 *
 * ---
 * @template T The target function.
 *
 * @example
 * function withParams (a: number, b: string){}
 * type A = LastParameter<typeof withParams> // string
 *
 * // Function with no parameters:
 * function noParams(){}
 * type B = LastParameter<typeof noParams> // never
 */
export type LastParameter<T extends AnyFunction> = Parameters<T> extends [...infer Rest, infer Last] ? Last : never;
