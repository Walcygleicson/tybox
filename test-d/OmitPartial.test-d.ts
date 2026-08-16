import type { OmitPartial } from "../src"
import type { O } from "./utils";
import { expectAssignable, expectError, expectNever, expectType } from "tsd"

type A = OmitPartial<O.Simple>;

expectAssignable<A>({ required: true })
expectError<A>({ required: true, partial: true })


expectType<OmitPartial<string>>("" as string)
expectNever( undefined as OmitPartial<never>)