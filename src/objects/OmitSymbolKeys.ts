/**
 * Omits all shallow-level symbolic keys from a type.
 *
 * ---
 * @template T The type whose *`[x: symbol]`* keys will be omitted. Also supports a union of types.
 * @example
 * const SYM = Symbol()
 * type T = { a: string, b: number, [SYM]: boolean }
 *
 * const example: OmitSymbolKeys<T> = {
 *    a: "foo",
 *    b: 123,
 *    [SYM]: true // ❌ Object literal may only specify known properties, and '[SYM]' does not exist in type 'OmitSymbolKeys<T>'.
 * }
 *
 */
export type OmitSymbolKeys<T extends object> = T extends any
  ? { [K in keyof T as K extends symbol ? never : K]: T[K] }
  : never;
