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


export function apply(
    command: string,
                      parameter: string,
                      optionalParameters: string[],
                      cb: (res: string, err: Error) => any
                      ): string {
    if (unicodeSupportedCommands.hasOwnProperty(command)) {
        if (diacritics.hasOwnProperty(command)) {
            try{
                diacritics[command](parameter)
            } catch(e){
                cb(parameter, e);
            }
        } else {
            cb(parameter, new Error("I do not know how to apply command: " + command + ". "
                + "Please submit a feature request at https://github.com/digitalheir/tex-to-unicode/issues."));
        }
    }
}
