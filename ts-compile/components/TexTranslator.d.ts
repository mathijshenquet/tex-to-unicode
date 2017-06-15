/// <reference types="react" />
import * as React from "react";
export interface TexState {
    input: string;
}
export interface TexProps {
}
export declare class TexTranslator extends React.PureComponent<TexProps, TexState> {
    constructor();
    onChangeInput(input: string): void;
    render(): JSX.Element;
    private convertInputUnicode();
    private convertInputHtml();
}
