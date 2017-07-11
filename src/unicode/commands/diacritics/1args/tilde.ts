import {lookupOrAppend} from "../../command-expander";

export const tilde = lookupOrAppend({
    o: 'õ',
    a: 'ã',
    n: 'ñ',

    O: 'Õ',
    A: 'Ã',
    N: 'Ñ'
}, "\u0303");
