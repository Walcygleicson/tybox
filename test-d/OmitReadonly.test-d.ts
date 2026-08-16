import type { OmitReadonly } from "../src";
import type { O } from "./utils"
import { expectAssignable, expectNotAssignable } from "tsd";

expectAssignable<OmitReadonly<O.Wide>>({ optional: "", required: "" })
expectAssignable<OmitReadonly<O.AllReadonly>>({})
expectNotAssignable<OmitReadonly<O.Wide>>({optional: "", required: "", readonly: ""})