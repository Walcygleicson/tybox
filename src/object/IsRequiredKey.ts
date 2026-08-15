

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
 * Testa se uma chave **`K`** em **`T`** é obrigatória e retorna um **`boolean`**. Para uma união de chaves, retorna **`true`** se todas as chaves forem obrigatórias, caso contrário o resultado é **`false`**.
 *
 * ---
 * @template T O tipo alvo.
 * @template K Uma chave (ou união) de **`T`**.
 */
export type IsRequiredKey<T, K extends keyof T> = false extends IsRequired<T, K> ? false : true;
