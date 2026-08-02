
/**
 * Makes all properties of an object deeply optional. Types that are not "*`Record<string, unknown>`*" are not broken.
 *
 * ---
 * @template T The target type.
 *
 * @example
 *
 * type A = { x: { name: string, age: number } }
 *
 * type B = DeepPartial<A> // { x?: { name?: string, age?: number } }
 */
export type DeepPartial<T extends Record<string, unknown>> = {
  [P in keyof T]?: T[P] extends Record<string, unknown> ? DeepPartial<T[P]> : T[P];
};

