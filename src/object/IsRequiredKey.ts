

/**
 * Verifica se uma única chave é obrigatória.
 * @private
 */
type IsRequired<T, K extends keyof T> = K extends K
  ? {} extends Pick<T, K>
    ? false
    : true
  : never;

/**
 * Tests whether a key **`K`** in **`T`** is required and returns a **`boolean`**. 
 * For a union of keys, it returns **`true`** if all keys are required; otherwise, the result is **`false`**.
 *
 * ---
 * @template T The target type.
 * @template K A key (or union of keys) of **`T`**.
 * @example
 * type T = { optional?: boolean; required: boolean }
 * 
 * type A = IsRequiredKey<T, "optional"> // false
 * type B = IsRequiredKey<T, "required"> // true
 * type C = IsRequiredKey<T, "required" | "optional"> // false (not all are required)
 */

export type IsRequiredKey<T, K extends keyof T> = false extends IsRequired<T, K> ? false : true;
