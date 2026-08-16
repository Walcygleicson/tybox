import type { AnyFunction } from "./AnyFunction";

/**
 * Creates a **`tuple`** containing the parameters of function **`F`**, 
 * converted to optional.
 *
 * ---
 * @template F The target function.
 *
 * @example
 * function fn(a: number, b: string) {}
 * 
 * type A = PartialParameters<typeof fn> // [a?: number, b?: string]
 */

export type PartialParameters<F extends AnyFunction> = F extends (...args: infer P) => any
  ? Partial<P>
  : never;
