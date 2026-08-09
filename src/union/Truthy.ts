import type { Falsy } from "./Falsy";

/**
 * Removes the **`Falsy`** types from a `type union`.
 */
export type Truthy<T = unknown> = Exclude<T, Falsy>;

