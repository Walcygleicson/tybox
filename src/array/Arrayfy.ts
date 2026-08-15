import type { NonRecursive } from "../__internal__";

/**
 * Converts a **`tuple`**, **`plain object`**, or **`Set`** into an array of types. Other types result in **`never`**.
 *
 * ---
 * @template T The base type to be converted into an array of types.
 * @example
 *
 * type A = Arrayfy<[string, number]> // (string | number)[]
 * type B = Arrayfy<{ a: number, b: boolean }> // (number | boolean)[]
 * type C = Arrayfy<Set<number | string | boolean>> // (number | string | boolean)[]
 */
export type Arrayfy<T> = T extends readonly unknown[]
  ? T[number][]
  : T extends Set<infer U>
    ? U[]
    : T extends NonRecursive
      ? never
      : T extends object
        ? T[keyof T][]
        : never;
