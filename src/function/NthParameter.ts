import type { AnyFunction } from "./AnyFunction";

/**
 * Extracts the type of a function's parameter at the given index. If the provided index is out of range, the resulting type will be **`never`**.
 * 
 * ---
 * @template T The target function.
 * @template N The index of the parameter whose type will be extracted. 
 * 
 * @example
 * function fn(a: number, b: string, c: boolean) {}
 * 
 * type A = NthParameter<typeof fn, 0> // number
 * type C = NthParameter<typeof fn, 2> // boolean
 * 
 * // Index out of range:
 * type X = NthParameter<typeof fn, 10> // never
 * type Y = NthParameter<typeof fn, -1> // never
 */
export type NthParameter<T extends AnyFunction, N extends number> = Parameters<T> extends { [K in N]: infer P } ? P : never;
