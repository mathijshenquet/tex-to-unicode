import {circledA, ringOverLetter} from "./1args/mathring";
import {acuteAccent} from "./1args/acute";
import {graveAccent} from "./1args/grave";
import {circumflex} from "./1args/circumflex";
import {tilde} from "./1args/tilde";
import {dieresis} from "./1args/dieresis";
import {cedilla} from "./1args/cedilla";
import {barredLetter} from "./1args/barred-letter";
import {caron} from "./1args/caron";
import {slashed} from "./1args/slashed";

import {tieLetters} from "../tie/tie-letters";
import {simpleSuffix} from "../../../util";

// export const diacritics: CommandExpander = (command, context) => {
//     const commandName = command.command.name;
//     switch(commandName) {
//         case "`":
//             // const mode: Mode = context.mode;
//             // switch(mode) {
//             //     case "Paragraph":
//             //     case "LR":
//             //     case "Math":
//
//             // Take first token
//             const firstToken: ParameterToken = command.childNode(0);
//             // Take first letter
//             firstToken.
//
//             const translatedFirstToken = modifiers[commandName](firstToken);
//
//                     // Take middle letter
//
//                     return "";
//     }
// };

/**
 * For example, \`o → ò
 */
export const modifiersTextMode: { [key: string]: (s: string) => string } = {
    // Text mode
    //
    "`": graveAccent, //{o}	ò	grave accent
    "'": acuteAccent, // Acute accent
    "^": circumflex, //{o}	ô	circumflex
    "~": tilde, //{o}	õ	tilde
    "=": simpleSuffix("\u0304"), //{o}	ō	macron accent (a bar over the letter)
    ".": simpleSuffix("\u0307"), //{o}	ȯ	dot over the letter
    "\"": dieresis, //{o}	ö	umlaut, trema or dieresis
    "H": simpleSuffix("\u030B"), //{o}	ő	long Hungarian umlaut (double acute)
    "c": cedilla, //{c}	ç	cedilla
    "k": simpleSuffix("\u0328"), //{a}	ą	ogonek
    "l": barredLetter, //{}	ł	barred l (l with stroke)
    "b": simpleSuffix("\u0331"), //{o}	o	bar under the letter
    "d": simpleSuffix("\u0323"), //{u}	ụ	dot under the letter\
    "r": ringOverLetter, //{a}	å	ring over the letter (for å there is also the special command \aa)
    "u": simpleSuffix("\u0306"), //{o}	ŏ	breve over the letter
    "v": caron, //{s}	š	caron/háček ("v") over the letter

    "t": tieLetters, //{oo}	o͡o	"tie" (inverted u) over the two letters

    "a": circledA,
    "o": slashed //	ø	slashed o (o with stroke)
};

/**
 * For example, \breve o → ò
 *
 * todo finish
 */
export const modifiersMathMode: { [key: string]: (s: string) => string } = {
    // Math mode
    //
    // \hat{o}	{\displaystyle {\hat {o}}} \hat{o}	circumflex	\^
    // \widehat{oo}	{\displaystyle {\widehat {oo}}} \widehat{oo}	wide version of \hat over several letters
    // \check{o}	{\displaystyle {\check {o}}} \check{o}	vee or check	\v
    "check": caron, //{s}	š	caron/háček ("v") over the letter
    // \tilde{o}	{\displaystyle {\tilde {o}}} \tilde{o}	tilde	\~
    // \widetilde{oo}	{\displaystyle {\widetilde {oo}}} \widetilde{oo}	wide version of \tilde over several letters
    // \acute{o}	{\displaystyle {\acute {o}}} \acute{o}	acute accent	\'
    "acute": acuteAccent, // Acute accent
    // \grave{o}	{\displaystyle {\grave {o}}} \grave{o}	grave accent	\`
    "grave": acuteAccent, //{o}	ò	grave accent
    // \dot{o}	{\displaystyle {\dot {o}}} \dot{o}	dot over the letter	\.
    // \ddot{o}	{\displaystyle {\ddot {o}}} \ddot{o}	two dots over the letter (umlaut in text-mode)	\"
    // \breve{o}	{\displaystyle {\breve {o}}} \breve{o}	breve	\u
    "breve": simpleSuffix("\u0306"), //{o}	ŏ	breve over the letter
    // \bar{o}	{\displaystyle {\bar {o}}} \bar{o}	macron	\=
    // \vec{o}	{\displaystyle {\vec {o}}} \vec{o}	vector (arrow) over the letter

    "mathring": ringOverLetter, //{a}	å	ring over the letter (for å there is also the special command \aa
};