/**
 * Extracts the first element of a **`tuple`**. 
 * Returns **`unknown`** if the tuple is empty.
 * 
 * ---
 * @template T The target tuple.
 * 
 * @example
 * import type { Head } from "tybox"
 * 
 * type A = Head<[string, number, boolean]> // string
 * type B = Head<[any?, number?]> // any
 * type C = Head<[]> // unknown
 * type D = Head<[...unknown[]]> // unknown
 */

export type Head<T extends readonly any[]> = T extends readonly [(infer H)?, ...any[]]
  ? H
  : unknown