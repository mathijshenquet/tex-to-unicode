export type CommandCallback = (res: string, err: Error) => any

export interface KnownCommand {
  name: string,
  optionalArguments: number;
  argumentCount: number;
  apply: (cb: CommandCallback, ...args: TeXArg) => string;
};
