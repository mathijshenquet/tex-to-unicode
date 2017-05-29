











/**
MMSP. Used in mathematical formulae. Four-eighteenths of an em.[4] In mathematical typography, the widths of spaces are usually given in integral multiples of an eighteenth of an em, and 4/18 em may be used in several situations, for example between the a and the + and between the + and the b in the expression a + b.[5] HTML/XML named entity: &MediumSpace;
*/
const mathSpace = "\u8287";

/**
 * https://tex.stackexchange.com/a/74354/22604
 // TODO // ~ inserts an "unbreakable" space (similar to an HTML &nbsp;) (in text or math mode);
 */
const spaces = {
/** \, inserts a \thinspace (equivalent to .16667em) in text mode, or \thinmuskip (equivalent to 3mu) in math mode;
https://en.wikipedia.org/wiki/Thin_space
*/
",": "\u2009", 
\: is equivalent to \> (see above);
\enspace inserts a space of .5em in text or math mode;
/**\quad inserts a space of 1em in text or math mode;*/
  "quad": "\u2003",
/**\qquad inserts a space of 2em in text or math mode;*/
  "qquad": "\u2003\u2003",
/**\  inserts what is called a "control space" (in text or math mode);*/
 " ":" ",
  // inserts an inter-word space in text mode (and is gobbled in math mode). Similarly for \space and { }.
  "space": " ",
  ";": "　",
  ",": "　",
  ":": "　",
}

  /**
  * inserts a negative \thinmuskip in math mode;
  */
//"!", " ",
  /**
  inserts \medmuskip (equivalent to 4.0mu plus 2.0mu minus 4.0mu) in math mode;
  */
//">" : "",
// \; inserts \thickmuskip (equivalent to 5.0mu plus 5.0mu) in math mode;
// \hfill inserts a so-called "rubber length" or stretch between elements (in text or math mode). Note that you may need to provide a type of anchor to fill from/to; see What is the difference between \hspace*{\fill} and \hfill?;  
//\kern <len> inserts a skip of <len> (may be negative) in text or math mode (a plain TeX skip);
//\hskip <len> (similar to \kern);
//\hspace{<len>} inserts a space of length <len> (may be negative) in math or text mode (a LaTeX \hskip);
//\hphantom{<stuff>} inserts space of length equivalent to <stuff> in math or text mode. Should be \protected when used in fragile commands (like \caption and sectional headings);

          
export type SpaceCommand = keyof typeof spaces;

export function isSpaceCommand(x: any): x is SpaceCommand {
 return spaces.hasOwnProperty(x);
}
