/**
 * Describes a generic function with a typed return value.
 *
 * ---
 * @template T The return type. The default is *`“any”`*.
 *
 */
export type AnyFunction<T = any> = (...args: any[]) => T;
