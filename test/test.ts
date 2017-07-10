import "mocha";

import {expect} from "chai";
import {convertCommand} from "../src/convert";


describe("quoted friends", () => {
    it("memes", function () {

    });
});

describe("special characters", () => {
    it("specializableChars", function () {
        expect(convertCommand("i")).to.equal("ı");
        expect(convertCommand("j")).to.equal("ȷ");
        expect(convertCommand("oe")).to.equal("œ");
        expect(convertCommand("OE")).to.equal("Œ");
        expect(convertCommand("ae")).to.equal("æ");
        expect(convertCommand("AE")).to.equal("Æ");
        expect(convertCommand("aa")).to.equal("å");
        expect(convertCommand("AA")).to.equal("Å");
        expect(convertCommand("o")).to.equal("ø");
        expect(convertCommand("O")).to.equal("Ø");
        expect(convertCommand("ss")).to.equal("ß");
        expect(convertCommand("l")).to.equal("ł");
        expect(convertCommand("L")).to.equal("Ł");

        expect(convertCommand.bind(null, "\\s")).to.throw;
    });

    it("graveAccent", () => {
        equals(convertSpecialCharacterToUnicode("\\`e"), "è");
        equals(convertSpecialCharacterToUnicode("\\`u"), "ù");
        equals(convertSpecialCharacterToUnicode("\\`i"), "ì");
        equals(convertSpecialCharacterToUnicode("\\`o"), "ò");
        equals(convertSpecialCharacterToUnicode("\\`a"), "à");
        equals(convertSpecialCharacterToUnicode("\\`E"), "È");
        equals(convertSpecialCharacterToUnicode("\\`U"), "Ù");
        equals(convertSpecialCharacterToUnicode("\\`I"), "Ì");
        equals(convertSpecialCharacterToUnicode("\\`O"), "Ò");
        equals(convertSpecialCharacterToUnicode("\\`A"), "À");
        equals(convertSpecialCharacterToUnicode("\\`c"), "c\u0300");
        //{o}	ò	grave accent
    });


    // TODO etc

    // it("acuteAccent", () => {
    //     "'" // Acute accent
    // });
    // it("circumflex", () => {
    //     "^" //{o}	ô	circumflex
    // });
    // it("tilde", () => {
    //     "~" //{o}	õ	tilde
    // });
    // it("simpleSuffix", () => {
    //     "=" //{o}	ō	macron accent (a bar over the letter)
    // });
    // it("simpleSuffix", () => {
    //     "." //{o}	ȯ	dot over the letter
    // });
    // it("dieresis", () => {
    //     "" //{o}	ö	umlaut, trema or dieresis
    // });
    // it("simpleSuffix", () => {
    //     "H" //{o}	ő	long Hungarian umlaut (double acute)
    // });
    // it("cedilla", () => {
    //     "c" //{c}	ç	cedilla
    // });
    // it("simpleSuffix", () => {
    //     "k" //{a}	ą	ogonek
    // });
    // it("barredLetter", () => {
    //     "l" //{}	ł	barred l (l with stroke)
    // });
    // it("simpleSuffix", () => {
    //     "b" //{o}	o	bar under the letter
    // });
    // it("simpleSuffix", () => {
    //     "d" //{u}	ụ	dot under the letter
    // });
    // it("ringOverLetter", () => {
    //     "r" //{a}	å	ring over the letter (for å there is also the special command \aa)
    // });
    // it("simpleSuffix", () => {
    //     "u" //{o}	ŏ	breve over the letter
    // });
    // it("caron", () => {
    //     "v" //{s}	š	caron/háček ("v") over the letter
    // });
    // it("tieLetters", () => {
    //     "t" //{oo}	o͡o	"tie" (inverted u) over the two letters
    // });
    // it("circledA", () => {
    //     "a"
    // });
    // it("slashed", () => {
    //     "o" //	ø	slashed o (o with stroke)
    // });
    it("processSpecialCharacters", () => {
        let processed = processSpecialCharacters([
            [
                {
                    type: "braced",
                    data: [["\\o"]]
                },
            ], "abc", 14
        ]);
        assert.deepEqual(
            processed,
            [
                [
                    {
                        type: "specialChar",
                        data: [["\\o"]],
                        unicode: "ø"
                    },
                ], "abc", 14
            ]
        )
        ;
    });
});
