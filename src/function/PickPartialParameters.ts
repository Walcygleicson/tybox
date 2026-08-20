import type { AnyFunction } from './AnyFunction';

type IsRequiredHead<P extends readonly any[]> = P extends readonly [any, ...any[]]
  ? true
  : false;

type DropFirst<P extends readonly any[]> = P extends readonly [any?,...infer Rest extends readonly any[]]
  ? Rest
  : [];

type PickOptional<P extends readonly any[]> = P extends readonly []
  ? []
  : IsRequiredHead<P> extends true
    ? PickOptional<DropFirst<P>>
    : [P[0]?, ...PickOptional<DropFirst<P>>];

/**
 * Extrai para uma tupla apenas os parâmetros opcionais da função **`F`**.
 * 
 * * ⚠️ **`Importante:`**
 * > O utilitário tem limitações quando tenta lidar com **`rest parameters`** "(`...args: T[]`)" o que gera o erro "**`A instanciação de tipo é muito profunda e possivelmente infinita. ts(2589)`**". Já para funções com **`overloads`** o TypeScript só considera a última assinatura, portanto os opcionais extráidos refletem apenas à última sobrecarga.
 *
 * ---
 * @template F Função alvo.
 *
 * @example
 * function fn(a: string, b?: number, c?: boolean): void {}
 *
 * type A = PickPartialParameters<typeof fn> // [b?: number | undefined, c?: boolean | undefined]
 * 
 * // ⚠️
 * function rest (a: string, ...b: any[]): void {}
 * type B = PickPartialParameters<typeof rest> // [any?, any?, any?, ..., ...any[]]
 */
export type PickPartialParameters<F extends AnyFunction> = PickOptional<
  Parameters<F>
>;
