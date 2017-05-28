import {modifyStringFunction} from "../translate-string";
export const dieresis = modifyStringFunction({
    e: 'ë',
    y: 'ÿ',
    u: 'ü',
    i: 'ï',
    o: 'ö',
    a: 'ä',

    E: 'Ë',
    Y: 'Ÿ',
    U: 'Ü',
    I: 'Ï',
    O: 'Ö',
    A: 'Ä'
}, "\u0308");
