import { expectType } from "tsd"
import type { Includes } from "../src"

expectType<Includes<[string, number, boolean], boolean>>(true) //@example
expectType<Includes<["hello", 1], 1> >(true)
expectType<Includes<[string, any], any> >(true)
expectType<Includes<[unknown, never], never> >(true)
expectType<Includes<[number, void], void> >(true)
expectType<Includes<[string, ...number[]], number> >(true) //@example
expectType<Includes<[string, ...(number | boolean)[]], number> >(true)
expectType<Includes<number[], number>>(true)
expectType<Includes<[string, never], never>>(true)

expectType<Includes<[string, number?], number>>(true) //@example
expectType<Includes<[string, number?], undefined>>(false)

expectType<Includes<[string, (1 & number)], (1 & number)>>(true)
expectType<Includes<[string, (1 & number)], (1 | number)>>(false)

expectType<Includes<[{}], null>>(false)
expectType<Includes<[number, string, true], boolean>>(false)
expectType<Includes<[string, unknown[]], never>>(false)
expectType<Includes<[1], number>>(false)
expectType<Includes<[], any>>(false)
expectType<Includes<[], never>>(false)



expectType<Includes<any[], unknown>>(false)
expectType<Includes<any[], never>>(false)
expectType<Includes<any[], string>>(false)
expectType<Includes<[...any[]], unknown>>(false)
expectType<Includes<any[], any>>(true)
expectType<Includes<[...any[]], any>>(true)
