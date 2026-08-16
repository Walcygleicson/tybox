import type { Dependent } from "../src";
import { expectAssignable, expectNotAssignable } from "tsd"

type T = {
    a: any,
    x?: number,
    y?: number
}

expectAssignable<Dependent<T, "x", "y">>({ a: "", y: 1, x: 2 })
expectNotAssignable<Dependent<T, 'x', 'y'>>({ a: '', y: 1})