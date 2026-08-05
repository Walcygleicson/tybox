/**
 * Represents a generic object whose keys can be **`string`** or **`symbol`** with optionally typed values.
 *
 * ---
 * @template A The type of the key values *`[x: string]`*. The default is **`any`**.
 * @template B The type of the values for keys *`[x: symbol]`*. By default, it assumes the same type as **`A`**.
 *  @example
 * const Sym = Symbol()
 *
 * // Any “string” or “symbol” key with any type of value.
 * const a: AnyObject = {name: “John”, [Sym]: 123}
 *
 * // Any key with a value of type “number” only.
 * const b: AnyObject<number> = {age: 25, [Sym]: 123} // ✅
 * const c: AnyObject<number> = {name: “John”, [Sym]: 123} // ❌ The ‘string’ type cannot be assigned to the “number” type.
 *
 * // Any “string” key with a “number” value and any ‘symbol’ key with a “boolean” value only.
 * const d: AnyObject<number, boolean> = {age: 25, [Sym]: true} // ✅
 * const e: AnyObject<number, boolean> = {name: “John”, age: 25, [Sym]: true} // ❌ The ‘string’ type cannot be assigned to the “number” type.
 */
export type AnyObject<A = any, B = A> = {
  [x: string]: A;
  [x: symbol]: B;
}