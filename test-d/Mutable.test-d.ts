import { expectAssignable,  } from "tsd"
import type { Mutable } from "../src"

type T = {
    a: any,
    readonly b?: number,
    readonly c: number
}

const obj: Mutable<T> = {
    a: "any",
    b: 0,
    c: 2
}

obj.b = 33
obj.c = 44

type Expected = { a: any, b?: number, c: number };
expectAssignable<Expected>(obj satisfies Mutable<T>)