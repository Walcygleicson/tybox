import type { AnyFunction } from "./AnyFunction";

/**
 * @internal
 * Remove elementos de uma tupla pelos índices informados, percorrendo
 * recursivamente e comparando a posição atual (via Counted) contra a
 * união de índices a remover (Indices[number]).
 */
type OmitTupleIndices<T extends readonly unknown[], Indices extends readonly number[], Counted extends unknown[] = []> =
  T extends readonly [infer Head, ...infer Rest]
  ? Counted["length"] extends Indices[number]
    ? OmitTupleIndices<Rest, Indices, [...Counted, unknown]>
    : [Head, ...OmitTupleIndices<Rest, Indices, [...Counted, unknown]>]
  : [];


/**
 * Extracts the types of a function's parameters into a tuple, omitting the parameters corresponding to the provided indices. If the function has no parameters, the resulting type will be an empty tuple.
 * 
 * ---
 * @template T The target function.
 * @template I Tuple containing the indices of the parameters to exclude.
 * 
 * @example
 * function withParams(a: number, b: string, c: boolean): any
 * 
 * type A = OmitParameters<typeof withParams, [1]> // [number, boolean]
 * 
 * // Out-of-scope indices are ignored:
 * type B = OmitParameters<typeof withParams, [99]> // [number, string, boolean] (Nothing is removed)
 * 
 * // Function with no parameters:
 * function noParams(): any
 * type C = OmitParameters<typeof noParams, [0, 1]> // [] (No parameters to remove)
 * 
 */
export type OmitParameters<T extends AnyFunction, I extends readonly number[]> =
  OmitTupleIndices<Parameters<T>, I>;