import {modifyStringFunction} from "../translate-string";
export const circumflex = modifyStringFunction({
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
