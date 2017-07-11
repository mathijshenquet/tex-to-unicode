import {lookupOrAppend} from "../../command-expander";
export const dieresis = lookupOrAppend({
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
