import type { IsEqual } from "../src"
import { expectType } from "tsd"
type A = { a: number; b: string };
type B = { a?: number; b: string };

expectType<IsEqual<string, string>>(true)
expectType<IsEqual<"hello", "hello">>(true)
expectType<IsEqual<{}, {}>>(true)
expectType<IsEqual<{readonly a: number}, {readonly a: number}>>(true)
expectType<IsEqual<A, {a: number, b: string}>>(true);

expectType<IsEqual<A, B>>(false)
expectType<IsEqual<number, bigint>>(false)
expectType<IsEqual<string, number>>(false)
expectType<IsEqual<string, "hello">>(false)
expectType<IsEqual<any, unknown>>(false)
expectType<IsEqual<never, any>>(false)
expectType<IsEqual<never, unknown>>(false)
expectType<IsEqual<any, {}>>(false)
expectType<IsEqual<object, {}>>(false)
expectType<IsEqual<null, object>>(false)
expectType<IsEqual<{a: number}, {readonly a: number}>>(false)
