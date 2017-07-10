import {Node, NodeProperties} from "latex-parser";

export class IdentityNode extends Node {

    /**
     * Constructor
     * @param {!NodeProperties=} opt_initialProperties the initial property values
     * @author Kirill Chuvilin <k.chuvilin@texnous.org>
     */
    constructor(opt_initialProperties?: NodeProperties) {
        super(opt_initialProperties);
    }
}