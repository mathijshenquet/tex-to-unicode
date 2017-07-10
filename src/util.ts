
export const simpleSuffix = function (modifier: string) {
    return (char: string) => {
        return char + modifier;
    }
};