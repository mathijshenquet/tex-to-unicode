// todo superscript block? https://en.wikipedia.org/wiki/Superscripts_and_Subscripts

export const superscriptCharacters = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",

  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",

  "a": "ᵃ",
  "b": "ᵇ",
  "c": "ᶜ",
  "d": "ᵈ",
  "e": "ᵉ",
  "f": "ᶠ",
  "g": "ᵍ",
  "h": "ʰ",
  "i": "ⁱ",
  "j": "ʲ",
  "k": "ᵏ",
  "l": "ˡ",
  "m": "ᵐ",
  "n": "ⁿ",
  "o": "ᵒ",
  "p": "ᵖ",
  // "q"
  "r": "ʳ",
  "s": "ˢ",
  "t": "ᵗ",
  "u": "ᵘ",
  "v": "ᵛ",
  "w": "ʷ",
  "x": "ˣ",
  "y": "ʸ",
  "z": "ᶻ",

  "A": "ᴬ",
  "B": "ᴮ",
  "D": "ᴰ",
  "E": "ᴱ",
  "G": "ᴳ",
  "H": "ᴴ",
  "I": "ᴵ",
  "J": "ᴶ",
  "K": "ᴷ",
  "L": "ᴸ",
  "M": "ᴹ",
  "N": "ᴺ",
  "O": "ᴼ",
  "P": "ᴾ",
  // "Q"
  "R": "ᴿ",
  // "S"
  "T": "ᵀ",
  "U": "ᵁ",
  "V": "ⱽ",
  "W": "ᵂ",
  // "X"
  // "Y"
  // "Z"

  "α": "ᵅ",
  "β": "ᵝ",
  "γ": "ᵞ",
  "δ": "ᵟ",
  "∊": "ᵋ",
  "θ": "ᶿ",
  "ι": "ᶥ",
  "Φ": "ᶲ", 
  "φ": "ᵠ", 
  "χ": "ᵡ"
}

const translateCharToSubstring = modifyStringFunction(superscriptCharacters);

export const superscript = function(s: string): string {
  return s.split("").map(char => translateCharToSubstring(char)).join("");
}
