import {lookupOrAppend} from "../../command-expander";
export const circumflex = lookupOrAppend({
    e: 'ê',
    u: 'û',
    i: 'î',
    o: 'ô',
    a: 'â',

    E: 'Ê',
    U: 'Û',
    I: 'Î',
    O: 'Ô',
    A: 'Â'
}, "\u0302");
