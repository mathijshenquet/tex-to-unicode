

import {circledA, ringOverLetter} from "./accents/mathring";
import {acuteAccent} from "./accents/acute";
import {graveAccent} from "./accents/grave";
import {circumflex} from "./accents/circumflex";
import {tilde} from "./accents/tilde";
import {simpleModifier} from "./translate-string";
import {dieresis} from "./accents/dieresis";
import {cedilla} from "./accents/cedilla";
import {barredLetter} from "./accents/barred-letter";
import {caron} from "./accents/caron";
import {tieLetters} from "./tie/tie-letters";
import {slashed} from "./accents/slashed";

/**
 * For example, \`o → ò
 */
export const diacritics = {
    "grave": acuteAccent, //{o}	ò	grave accent
    "acute": acuteAccent, // Acute accent
    "mathring": ringOverLetter, //{a}	å	ring over the letter (for å there is also the special command \aa)
    "breve": simpleModifier("\u0306"), //{o}	ŏ	breve over the letter
    "check": caron, //{s}	š	caron/háček ("v") over the letter

    "`": graveAccent, //{o}	ò	grave accent
    "'": acuteAccent, // Acute accent
    "^": circumflex, //{o}	ô	circumflex
    "~": tilde, //{o}	õ	tilde
    "=": simpleModifier("\u0304"), //{o}	ō	macron accent (a bar over the letter)
    ".": simpleModifier("\u0307"), //{o}	ȯ	dot over the letter
    "\"": dieresis, //{o}	ö	umlaut, trema or dieresis
    "H": simpleModifier("\u030B"), //{o}	ő	long Hungarian umlaut (double acute)
    "c": cedilla, //{c}	ç	cedilla
    "k": simpleModifier("\u0328"), //{a}	ą	ogonek
    "l": barredLetter, //{}	ł	barred l (l with stroke)
    "b": simpleModifier("\u0331"), //{o}	o	bar under the letter
    "d": simpleModifier("\u0323"), //{u}	ụ	dot under the letter

    "r": ringOverLetter, //{a}	å	ring over the letter (for å there is also the special command \aa)

    "u": simpleModifier("\u0306"), //{o}	ŏ	breve over the letter

    "v": caron, //{s}	š	caron/háček ("v") over the letter

    "t": tieLetters, //{oo}	o͡o	"tie" (inverted u) over the two letters

    "a": circledA,
    "o": slashed //	ø	slashed o (o with stroke)
};

export type DiacriticChar = keyof typeof diacritics;

export function isDiacriticChar(x: string): x is DiacriticChar {
    return diacritics.hasOwnProperty(x);
}