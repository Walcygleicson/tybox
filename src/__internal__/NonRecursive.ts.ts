import type { TypedArray } from "../union";
/**
 * União de tipos que não devem ser desmontados em profundidade.
 */
export type NonRecursive =
    | Function
    | Date
    | RegExp
    | Map<unknown, unknown>
    | Set<unknown>
    | WeakMap<WeakKey, unknown>
    | WeakSet<WeakKey>
    | Promise<unknown>
    | Error
    | ArrayBuffer
    | DataView
    | TypedArray