/**
 * Torna a propriedade **`X`** obrigatória somente quando **`Y`** for atribuída.
 * 
 * ---
 * @template T O tipo alvo.
 * @template X A chave de **`T`** que será obrigatória caso a chave **`Y`** for atribuída.
 * @template Y A chave de **`T`** que, se atribuída, torna **`X`** obrigatória.
 * 
 * @example
 * type T = {a: number, b?: number, c?: number}
 * type D = Dependent<T, "b", "c">
 * 
 * const a: D = {a: 0, c: 1} // ❌ A propriedade 'b' está ausente no tipo '{ a: number; c: number; }', mas é obrigatória no tipo 'D'.
 * 
 * const b: D = {a: 0, b: 1, c: 2} // ✅
 */
export type Dependent<T, X extends keyof T, Y extends keyof T> =
  | (Omit<T, X | Y> & { [K in X]-?: T[K] } & { [K in Y]-?: T[K] })
  | (Omit<T, Y> & { [K in Y]?: never });
