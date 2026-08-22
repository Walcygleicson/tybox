import { expectType } from "tsd"
import type { ArrayLength } from "../src"

// expectType<ArrayLength<>>()
const number = 0 as number

expectType<ArrayLength<string[]>>(number)
expectType<ArrayLength<[string, ...number[]]>>(number)
expectType<ArrayLength<[...any[]]>>(number)
expectType<ArrayLength<never[]>>(number)
expectType<ArrayLength<any[]>>(number)
expectType<ArrayLength<unknown[]>>(number)
expectType<ArrayLength<void[]>>(number)
expectType<ArrayLength<readonly any[]>>(number)

expectType<ArrayLength<[]>>(0)
expectType<ArrayLength<[string, number?]>>(0 as (1 | 2))
expectType<ArrayLength<[never, void]>>(2)
expectType<ArrayLength<[string, number]>>(2)
expectType<ArrayLength<[any?]>>(0 as (0 | 1))
expectType<ArrayLength<[never, unknown, never[]]>>(3)
expectType<ArrayLength<[(string | number), (boolean | bigint)]>>(2)
expectType<ArrayLength<[null, undefined]>>(2)
expectType<ArrayLength<[undefined]>>(1)
