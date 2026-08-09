
/**
 * Union of valid types in **`JSON`**.
 */
export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | readonly JSONValue[]
  | { [key: string]: JSONValue }
  | { readonly [key: string]: JSONValue }
