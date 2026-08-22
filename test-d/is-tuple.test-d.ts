import { expectType } from "tsd"
import type { IsTuple } from "../src"

// expectType<IsTuple<>>()

expectType<IsTuple<[]>>(true)
expectType<IsTuple<[string, never]>>(true)
expectType<IsTuple<[string, number?]>>(true)
expectType<IsTuple<[never?]>>(true)
expectType<IsTuple<[undefined]>>(true)
expectType<IsTuple<[any[]?]>>(true)
expectType<IsTuple<[void, void]>>(true)
expectType<IsTuple<(string[] & [string])>>(true) // Funde para tupla [string]

expectType<IsTuple<(string[] & [...string[]])>>(false)
expectType<IsTuple<any[]>>(false)
expectType<IsTuple<[string, ...number[]]>>(false)
expectType<IsTuple<[...string[]]>>(false)
expectType<IsTuple<(string | number)[]>>(false)
expectType<IsTuple<[string?, ...any[]]>>(false)
expectType<IsTuple<undefined[]>>(false)
expectType<IsTuple<(string[] | [string])>>(false)