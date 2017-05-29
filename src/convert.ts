import {CommandOptions} from "./options";
export function convertCommand(command: string,
                               options: CommandOptions = {
                                   parameters: [],
                                   optionalParameters: [],
                                   translateTo: "txt"
                               }): string {
    const {translateTo} = options;
    switch (translateTo) {
        case "txt":

        case "html":
        // TODO;
        default:
            throw new Error("Unsupported format: '" + translateTo + "'. Use one of: " + Object.keys(supportedMarkups));
    }
}

// export function convertString(str: string){
//     parseString()
// }

