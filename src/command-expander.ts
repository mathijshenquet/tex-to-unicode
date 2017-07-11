import {TeXComm} from "latex-parser";

export type LatexMode = "Text" | "Math";

export interface ExpandContext {
    mode: LatexMode;
    onExpanderNotFound: CommandExpander;
}

export type CommandExpander<T> = (command: TeXComm, context: ExpandContext) => T;
