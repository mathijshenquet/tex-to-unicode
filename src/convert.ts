export const supportedMarkups = {
  "txt": true,
  // "md": true,
  "html": true
};

type SupportedMarkup = keyof typeof supportedMarkups;

export function translate(
  command: string,
  parameters: string[],
  translateTo = "txt": SupportedMarkup,
  optionalParameters: string[],
): string {
  switch(translateTo) {
    case "txt":
      // TODO;
    case "html":
      // TODO;
    default:
      throw new Error("Unsupported format: '" + translateTo + "'. Use one of: " + Object.keys(supportedMarkups));
  }
}
