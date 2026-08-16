import type { RequiredParameters } from "../src";
import { expectNotType, expectType } from "tsd"

type T = (a: number, b?: string, c?: boolean) => any
type R = RequiredParameters<T>;

expectType<R>([1, "hello", true] as R)
expectNotType<R>([1])