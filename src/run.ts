import { readdirSync } from "fs-extra"
import { shell } from "@re-do/node-utils"
import { promptForJsrxFile } from "./generateJsrx"

export const run = async () => {
    const cwd = process.cwd()

    let jsrxConfigFile = readdirSync(cwd).find(
        (fileName) => fileName === "jsrx.js" || fileName === "jsrx.ts"
    )
    if (!jsrxConfigFile) {
        jsrxConfigFile = await promptForJsrxFile()
    }

    const runner =
        jsrxConfigFile === "jsrx.js"
            ? "node"
            : `npx ts-node --transpile-only -O '{"module": "commonjs"}'`

    const jsrxArgIndex = process.argv.findIndex((arg) =>
        arg.endsWith("jsrx/dist/run.js")
    )
    // If 'jsrx' was not found or was the last arg, quit
    if (jsrxArgIndex === -1 || jsrxArgIndex >= process.argv.length - 1) {
        throw new Error(
            "'jsrx' requires a positional argument representing the name of the script to run, e.g. 'jsrx build'."
        )
    }
    const scriptName = process.argv[jsrxArgIndex + 1]

    shell(`${runner} ${jsrxConfigFile} ${scriptName}`)
}

run()
