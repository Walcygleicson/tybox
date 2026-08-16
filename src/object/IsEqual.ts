/**
 * Compares whether two types are equal and returns a **`boolean`**.
 * This utility correctly distinguishes **`any`** from **`unknown`**.
 *
 * ---
 * @template X The type to compare with **`Y`**.
 * @template Y The type to be compared with **`X`**.
 *
 * @example
 * type A = IsEqual<string, string> // true
 * type B = IsEqual<string, number> // false
 * type C = IsEqual<{ a: number }, { a: number }> // true
 * type D = IsEqual<{ a: number }, { a?: number }> // false
 * type E = IsEqual<any, unknown> // false
 * type F = IsEqual<string, "hello"> // false
 */

export type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
