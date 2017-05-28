export const simpleModifier = function (modifier: string) {
    return (char: string) => {
        return char + modifier;
    }
};

export function modifyStringFunction(conversionTable: { [k: string]: string },
                                     _default_append?: string): (s: string) => string {
    return (string: string) => {
        if (conversionTable.hasOwnProperty(string)) return conversionTable[string];

        if (!_default_append) throw new Error("I do not know how to modify the following string: " + string + ". "
            + "Change your TeX file or submit a feature request at https://github.com/digitalheir/tex-to-unicode/issues.");
        return string + _default_append;
    }
}