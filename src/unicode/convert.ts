export const unicodeSupportedCommands = Object.assign({}, diacritics);

export const supportedMarkups = {
  "txt": true,
  // "md": true,
  "html": true
};

type SupportedMarkup = keyof typeof supportedMarkups;

export function apply(
  command: string,
  parameters: string[],
  optionalParameters...: string[],
): string {
  if(unicodeSupportedCommands.hasOwnProperty(command)) {
    if(diacritics.hasOwnProperty(command)) {
      return [diacritics[command](parameters[0] || "")].concat(parameters.slice(1).join("")
      );
    } else {
      throw new Error("I do not know how to apply command: " + command + ". "
            + "Please submit a feature request at https://github.com/digitalheir/tex-to-unicode/issues.");
    }
  }
}
