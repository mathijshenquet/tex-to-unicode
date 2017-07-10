import {lookupOrAppend} from "../command-expander";

export const acuteAccent = lookupOrAppend({
    e: 'é',
    y: 'ý',
    u: 'ú',
    i: 'í',
    o: 'ó',
    a: 'á',

    E: 'É',
    Y: 'Ý',
    U: 'Ú',
    I: 'Í',
    O: 'Ó',
    A: 'Á'
}, "\u0301");
