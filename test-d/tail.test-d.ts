import { expectAssignable, expectError } from "tsd"
import type { Tail } from "../src"

expectAssignable<Tail<[string, number, boolean]>>([1, true])
expectAssignable<Tail<[]>>([])
expectAssignable<Tail<[string, number?, boolean?]>>([1, true])
expectAssignable<Tail<[string, number?, boolean?]>>([1])
expectAssignable<Tail<[any, ...string[]]>>([""])

expectError<Tail<[string, number?, boolean?]>>([true])