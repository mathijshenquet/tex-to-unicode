import {lookupOrAppend} from "../../command-expander";

export const ringOverLetter = lookupOrAppend({
    a: "å",
    A: "Å",
    y: "ẙ"
}, "\u030A");


export function circledA(char: string) {
    if (char === 'a') {
        return 'å';
    } else {
        throw new Error("I do not know how to modify the following string: " + char + ". " +
        "You should submit a feature request.");
    }
}
