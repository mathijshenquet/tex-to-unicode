import "mocha";
import * as assert from "assert";
import {isSpecializableChar} from "../src/special-characters/special-character-handlers";
import {convertSpecialCharacterToUnicode, processSpecialCharacters} from "../src/special-characters/special-characters";

const equals = assert.equal;

describe("quoted friends", () => {
    it("memes", function () {

    });
});

describe("special characters", () => {
    it("specializableChars", function () {
        equals(convertSpecialCharacterToUnicode("\\i"), "ı");
        equals(convertSpecialCharacterToUnicode("\\j"), "ȷ");
        equals(convertSpecialCharacterToUnicode("\\oe"), "œ");
        equals(convertSpecialCharacterToUnicode("\\OE"), "Œ");
        equals(convertSpecialCharacterToUnicode("\\ae"), "æ");
        equals(convertSpecialCharacterToUnicode("\\AE"), "Æ");
        equals(convertSpecialCharacterToUnicode("\\aa"), "å");
        equals(convertSpecialCharacterToUnicode("\\AA"), "Å");
        equals(convertSpecialCharacterToUnicode("\\o"), "ø");
        equals(convertSpecialCharacterToUnicode("\\O"), "Ø");
        equals(convertSpecialCharacterToUnicode("\\ss"), "ß");
        equals(convertSpecialCharacterToUnicode("\\l"), "ł");
        equals(convertSpecialCharacterToUnicode("\\L"), "Ł");

        assert.throws(convertSpecialCharacterToUnicode.bind(null, "\\s"), Error);
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
    // it("simpleModifier", () => {
    //     "=" //{o}	ō	macron accent (a bar over the letter)
    // });
    // it("simpleModifier", () => {
    //     "." //{o}	ȯ	dot over the letter
    // });
    // it("dieresis", () => {
    //     "" //{o}	ö	umlaut, trema or dieresis
    // });
    // it("simpleModifier", () => {
    //     "H" //{o}	ő	long Hungarian umlaut (double acute)
    // });
    // it("cedilla", () => {
    //     "c" //{c}	ç	cedilla
    // });
    // it("simpleModifier", () => {
    //     "k" //{a}	ą	ogonek
    // });
    // it("barredLetter", () => {
    //     "l" //{}	ł	barred l (l with stroke)
    // });
    // it("simpleModifier", () => {
    //     "b" //{o}	o	bar under the letter
    // });
    // it("simpleModifier", () => {
    //     "d" //{u}	ụ	dot under the letter
    // });
    // it("ringOverLetter", () => {
    //     "r" //{a}	å	ring over the letter (for å there is also the special command \aa)
    // });
    // it("simpleModifier", () => {
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
