/**
 * Union of all native JavaScript **`TypedArrays`**. Does not include **`ArrayBuffer`**, **`DataView`**, and **`SharedArrayBuffer`**.
 *
 * ---
 * @example
 *
 * type Fn = (...args: any[]) => TypedArray // Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array
 */
export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;
