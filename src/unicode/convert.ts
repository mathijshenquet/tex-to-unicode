import {diacritics} from "./diacritics";
import {isCharacterCommand} from "./symbols/symbols";
import {isSpaceCommand, spaceCharacters} from "./symbols/space";

export const unicodeSupportedCommands = Object.assign({}, diacritics);


export function commandToCharacter(command: string): string {
    if (isCharacterCommand(command)) {
        return commandToCharacter[command];
    } else if (isSpaceCommand(command)) {
        return spaceCharacters[command];
    } else {
        throw unknownCommandError(command);
    }
}


export function apply(command: string,
                      parameters: string[],
                      optionalParameters: string[]): string {
    if (unicodeSupportedCommands.hasOwnProperty(command)) {
        if (diacritics.hasOwnProperty(command)) {
            return ([diacritics[command](parameters[0] || "")]
                    .concat(parameters.slice(1))
                    .join("")
            );
        } else {
            throw new Error("I do not know how to apply command: " + command + ". "
                + "Please submit a feature request at https://github.com/digitalheir/tex-to-unicode/issues.");
        }
    }
}
