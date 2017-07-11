
export function slashed(char: string) {
    if (char === 'o') {
        return 'ø';
    } else {
        throw new Error("I do not know how to modify the following string: " + char + ". " +
        "Change your TeX file or submit a feature request.");
    }
}
