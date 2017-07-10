import {CommandOptions, supportedMarkups} from "./options";
import {LaTeX} from "latex-parser";

export function convertLaTeX(options: CommandOptions = {
                                 translateTo: "txt"
                             },
                             ...latex: LaTeX[]): string {
    const {translateTo} = options;

    switch (translateTo) {
        case "txt":
            return
        case "html":

        default:
            throw new Error("Unsupported format: '"
                + translateTo
                + "'. Use one of: "
                + Object.keys(supportedMarkups)
            );
    }
}

// export function convertString(str: string){
//     parseString()
// }

