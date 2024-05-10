export enum TerminalLineType {
  Command = 'terminal-command',
  Output = 'terminal-output',
  Error = 'terminal-error'
}

export type TerminalLine = {
  text: string;
  type: TerminalLineType;
};
