/**
 * Extracts the type of a function's parameter at the given index.
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
 * // ⚠️ Edge cases:
 * type X = NthParameter<typeof fn, 10> // undefined (index out of range)
 * type Y = NthParameter<typeof fn, -1> // number | string | boolean
 */
export type NthParameter<T extends (...args: any[]) => any, N extends number> = Parameters<T>[N];