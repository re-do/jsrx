import { shell as runShell, ShellOptions } from "@re-do/utils/dist/node"

export const shell = runShell
export const $ = (cmd: string, options?: ShellOptions) => () =>
    shell(cmd, options)
