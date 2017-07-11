import {lookupOrAppend} from "../../command-expander";
export const graveAccent = lookupOrAppend({
    e: "è",
    u: "ù",
    i: "ì",
    o: "ò",
    a: "à",
    E: "È",
    U: "Ù",
    I: "Ì",
    O: "Ò",
    A: "À"
}, "\u0300");