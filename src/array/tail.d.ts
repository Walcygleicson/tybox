import type { TupleLike } from "./tuple-like"

/**
 * Extracts all elements of a tuple except the first one, 
 * and returns them in a new tuple.
 * 
 * ---
 * @template T The target tuple.
 * 
 * @example
 * type A = Tail<[string, number, boolean]> // readonly [number, boolean]
 * type B = Tail<[]> // readonly any[]
 * type C = Tail<[any, ...string[]]> // readonly string[]
 */
export type Tail<T extends TupleLike> = T extends readonly [any?, ...infer Rest extends TupleLike]
  ? Readonly<Rest>
  : [];
