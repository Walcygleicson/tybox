import type { PlainObject } from "../objects";
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
? T[number][] // Tupla para Array
: T extends Set<infer U> // Set para Array
    ? U[]
    : T extends PlainObject // Objeto plano para Array
      ? T[keyof T][]
      : never;
