import { expectType } from "tsd"
import type { UnionToIntersection } from "../src"

expectType<UnionToIntersection<{ a: string } | { b: number }>>({ a: "", b: 1 })
expectType<UnionToIntersection<string | number>>(undefined as never) // Colapsa para never pois é impossível ser string e number ao mesmo tempo
