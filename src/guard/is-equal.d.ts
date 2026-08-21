
/**
 * Checks whether type **`X`** is strictly equal to **`Y`** and returns a boolean.
 * 
 * ---
 * @template X The first type for comparison.
 * @template Y The second type for comparison.
 * @category **`guard`**
 * 
 * @example
 * import type { IsEqual } from "tybox"
 * 
 * type A = IsEqual<string, string> // true
 * type B = IsEqual<{ a: string }, { a: string }> // true
 * type C = IsEqual<string, number> // false
 * type D = IsEqual<string, "hello"> // false
 */
export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
