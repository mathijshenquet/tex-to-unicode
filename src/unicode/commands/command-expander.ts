import {CommandToken} from "latex-parser";

import {CommandExpander, ExpandContext} from "../../command-expander";

export function lookupOrAppend(conversionTable: { [k: string]: string },
                               _default_append?: string): (s: string) => string {
    return (string: string) => {
        if (conversionTable.hasOwnProperty(string)) return conversionTable[string];

        if (!_default_append) throw new Error(
            "I do not know how to modify the following string: "
            + string +
            ". "
            + "Change your TeX file or submit a feature request at "
            + "https://github.com/digitalheir/tex-to-unicode/issues."
        );

        return string + _default_append;
    }
}




export type DiacriticChar = keyof typeof diacritics;

export function isDiacriticChar(x: string): x is DiacriticChar {
    return diacritics.hasOwnProperty(x);
}

const expanders =

export const expand: CommandExpander = (
    command: CommandToken,
    context: ExpandContext
) => {
    switch (expanders[command]) {

    } else {
        return context.onExpanderNotFound(command, context);
    }
};