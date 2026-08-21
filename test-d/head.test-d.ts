import { expectType } from "tsd"
import type { Head } from "../src"

const unknown = undefined as unknown
const string = "" as string
const never = undefined as never
const any = undefined as any

expectType<Head<[string, number, boolean]>>(string) //@example
expectType<Head<[any?, number?]>>(any) // @example
expectType<Head<[string?, number?]>>(string)
expectType<Head<[2, ...any[]]>>(2)
expectType<Head<[]>>(unknown)
expectType<Head<[...unknown[]]>>(unknown)
expectType<Head<[never, 3, 5]>>(never)
expectType<Head<["hello"?]>>("hello")

expectType<Head<(number | boolean)[]>>(1 as (number | boolean)) // ⚠️ O TS não conhece a posição dos elementos nesse caso de tipo. Impossível obter o primeiro.