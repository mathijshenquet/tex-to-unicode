import * as React from "react";

export interface TexState {
    input: string;
}

export interface TexProps {
}

export class TexTranslator extends React.PureComponent<TexProps, TexState> {
    constructor() {
        super();
        this.state = {input: ""};
    }

    onChangeInput(input: string) {
        this.setState(
            {input}
        );
    }

    render() {
        // rows="8"
        //                   cols={40}
        return <section className="input-fields">
            <div className="mdc-textfield mdc-textfield--multiline">
                <textarea
                    className="mdc-textfield__input input"
                    name="tex-input"
                    rows={8}
                    onChange={e => this.onChangeInput(e.target.value)}
                    id="tex-input"
                    placeholder="Input LaTeX / TeX here"
                />
            </div>

            <div className="mdc-textfield mdc-textfield--multiline">
                <textarea name="output-unicode"
                          value={this.convertInputUnicode()}
                          rows={8}
                          className="mdc-textfield__input output unicode"
                          id="tex-output-unicode"
                          placeholder="Unicode uutput will appear here"
                />
            </div>

            <div className="mdc-textfield mdc-textfield--multiline">
                <textarea name="output-html"
                          value={this.convertInputHtml()}
                          rows={8}
                          className="mdc-textfield__input output html"
                          id="tex-output-unicode"
                          placeholder="HTML uutput will appear here"
                />
            </div>
        </section>;
    }

    private convertInputUnicode() {
        // TODO
        return this.state.input;
    }

    private convertInputHtml() {
        // TODO
        return this.state.input;
    }
}
