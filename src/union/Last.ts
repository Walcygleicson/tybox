import type { UnionToIntersection } from "../transform";


/**
 * Obtém o último membro de uma união de tipos.
 * 
 * - ⚠️ **`Efeito Colateral`**:
 * > A ordem de captura **`NÃO`** corresponde de forma confiável à ordem em que os membros foram escritos. Para uniões de literais primitivos (**`string`**, **`number`**, **`boolean`**), o TypeScript reordena internamente os membros, contradizendo a ordem da escrita. Atualmente **`(08/2026)`** a ordem ainda é preservada somente para união de tipos-objetos.
 * - Fontes: [typescript-native-bridge/issues/20](https://github.com/johnsoncodehk/typescript-native-bridge/issues/20) > [DefinitelyTyped/issues/28044](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28044)
 * 
 * ---
 * @template U União de tipos.
 * 
 * @example
 * // ✅
 * type A = Last<{a: string} | {b: number}> // {b: number}
 * 
 * // ⚠️
 * type T = number | string // string | number (reaordenado internamente pelo TS)
 * type B = Last<T> // number
 *
 * type X = 5 | 1 | 0 // 0 | 1 | 5 (reordenado internamente pelo TS)
 * type C = Last<X> // 5
 */
export type Last<U> = UnionToIntersection<U extends any ? (x: U) => void : never> extends (x: infer R) => void
    ? R
    : never;
