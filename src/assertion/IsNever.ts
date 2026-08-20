/**
 * Tests whether the provided type is **`never`** and returns a **`boolean`**.
 *
 * ---
 * @template T The target type.
 *
 * @example
 * type A = IsNever<string> // false
 * type B = IsNever<never> // true
 */
export type IsNever<T> = [T] extends [never] ? true : false;
