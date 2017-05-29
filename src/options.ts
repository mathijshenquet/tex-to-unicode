export const supportedMarkups = {
    "txt": true,
    // "md": true,
    "html": true
};

type SupportedMarkup = keyof typeof supportedMarkups;

export interface CommandOptions {
    parameters: string[];
    optionalParameters: string[];
    translateTo: SupportedMarkup;
}
