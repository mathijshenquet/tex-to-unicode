import {modifyStringFunction} from "../translate-string";
export
const graveAccent = modifyStringFunction({
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
