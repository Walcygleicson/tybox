import type { AnyFunction } from "./AnyFunction";

/**
 * Creates a **`tuple`** containing the parameters of function **`F`**, 
 * converted to required.
 *
 * ---
 * @template F The target function.
 *
 * @example
 * function fn(a: number, b?: string, c?: boolean) {}
 * type A = RequiredParameters<typeof fn> // (a: number, b: string, c: boolean)
 */
export type RequiredParameters<F extends AnyFunction> = F extends (...args: infer P) => any
  ? Required<P>
  : never;
