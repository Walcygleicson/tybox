/**
 * Extracts the type of a function's first parameter.
 *
 * ---
 * @template T The target function.
 *
 * @example
 * function fn(a: number, b: string, c: boolean) {}
 *
 * type A = FirstParameter<typeof fn> // number
 *
 * // ⚠️ Edge cases:
 * function noParams() {}
 * type B = FirstParameter<typeof noParams> // undefined (no first parameter)
 */
export type FirstParameter<T extends (...args: any[]) => any> = Parameters<T>[0];
