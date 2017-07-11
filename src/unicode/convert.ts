import {isTeXComm, LaTeX, TeXArg} from "latex-parser";
import {CommandOptions} from "../options";
import {unknownCommandError} from "../unknown-command";
import {isCharacterCommand, commandToCharacter} from "./commands/symbols/0arg/symbols";
import {isSpaceCommand, spaceCharacters} from "./commands/symbols/0arg/space";


/*
 * when TeX is looking for an argument to a macro defined with \newcommand, if it finds a left brace {, then the
 * argument will be whatever is between this brace and the corresponding } (at the same level); otherwise the first
 * token (character or control sequence) will be the argument.
 * */

export interface ConversionResult {
    result: string;
    tail: LaTeX[];
}

export function convertLaTeX(options: CommandOptions = {
                                 translateTo: "txt"
                             },
                             ...latex: LaTeX[]): ConversionResult {
    if (latex.length <= 0) return {
        result: "",
        tail: []
    };

    const l: LaTeX = latex[0];
    if (isTeXComm(l)) {
        const commandName = l.name;
        if (isCharacterCommand(commandName)) {
            return commandToCharacter[commandName];
        } else if (isSpaceCommand(commandName)) {
            return spaceCharacters[commandName];
        } else {
            throw unknownCommandError(commandName);
        }

    } else {
        return latex.toString();
    }
}




export function apply(command: string,
                      args: TeXArg[],
                      cb: (res: string, err: Error) => any): string {
    if (unicodeSupportedCommands.hasOwnProperty(command)) {
        if (diacritics.hasOwnProperty(command)) {
            try {
                diacritics[command](parameter)
            } catch (e) {
                cb(parameter, e);
            }
        } else {
            cb(parameter, new Error("I do not know how to apply command: " + command + ". "
                + "Please submit a feature request at https://github.com/digitalheir/tex-to-unicode/issues."));
        }
    }
}
