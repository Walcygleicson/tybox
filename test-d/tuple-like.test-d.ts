import { expectAssignable, expectError } from "tsd"
import type { TupleLike } from "../src"

expectAssignable<TupleLike>([] as readonly any[])
expectAssignable<TupleLike<string>>([""] as readonly string[])
expectError<TupleLike<number>>([""])
expectError<TupleLike<number>>(1)