



//
//



/**
 * For example, \i → ı
 */
export const specialChars = {
    "i": "ı",
    "j": "ȷ",
    "oe": "œ",
    "OE": "Œ",
    "ae": "æ",
    "AE": "Æ",
    "aa": "å",
    "AA": "Å",
    "o": "ø",
    "O": "Ø",
    "ss": "ß",
    "l": "ł",
    "L": "Ł"
};

export type SpecializableChar = (keyof typeof specialChars);

export function isSpecializableChar(c: string): c is SpecializableChar {
    return specialChars.hasOwnProperty(c);
}
