// todo subscript block? https://en.wikipedia.org/wiki/Superscripts_and_Subscripts

import {lookupOrAppend} from "../command-expander";
export const subscriptCharacters = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",

  "+": "₊",
  "-": "₋",
  "=": "₌",

  "(": "₍",
  ")": "₎",

  "a": "ₐ",
  "e": "ₑ",
  "h": "ₕ",
  "i": "ᵢ",
  "j":  "ⱼ",
  k:  "ₖ",
  l:  "ₗ",
  m:  "ₘ",
  n: "ₙ",
  "o": "ₒ",
  p: "ₚ",
  "r": "ᵣ",
  s: "ₛ",
  t: "ₜ",
  "u": "ᵤ",
  "v": "ᵥ",
  "x": "ₓ",

  // "Α"
  "β": "ᵦ",
  "γ": "ᵧ",
  
  //
  //
  //
  //
  
  "ρ": "ᵨ",
  
  //
  
  "φ": "ᵩ",
  "χ": "ᵪ"
  
  //
};

const translateCharToSubstring = lookupOrAppend(subscriptCharacters);

export const subscript = function(s: string): string {
  return s.split("").map(char => translateCharToSubstring(char)).join("");
};

