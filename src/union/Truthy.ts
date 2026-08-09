import type { Falsy } from "./Falsy";

/**
 * Removes the **`Falsy`** types from a `type union`.
 * 
 * ---
 * @template T Base type to be filtered.
 * @example
 * type Mix = true | 0 | 1 | null | undefined | "hello"
 * 
 * type OnlyTruthy = Truthy<Mix> // true | 1 | "hello"
 */
export type Truthy<T> = Exclude<T, Falsy>;

