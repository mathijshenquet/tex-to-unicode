import {CommandToken} from "latex-parser";
import {LatexMode} from "./LatexMode";
import {IdentityNode} from "./tex/IdentityNode";

export interface ExpandContext {
    mode: LatexMode;
    onExpanderNotFound: CommandExpander;
}

export type CommandExpander = (command: CommandToken, context: ExpandContext) => IdentityNode;