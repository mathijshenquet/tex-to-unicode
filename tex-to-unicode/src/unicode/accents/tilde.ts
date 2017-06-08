import {modifyStringFunction} from "../translate-string";

export const tilde = modifyStringFunction({
    o: 'õ',
    a: 'ã',
    n: 'ñ',

    O: 'Õ',
    A: 'Ã',
    N: 'Ñ'
}, "\u0303");
