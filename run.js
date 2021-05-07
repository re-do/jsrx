#!/usr/bin/env node
const { readdirSync } = require("fs-extra")
const { shell, prompt } = require("@re-do/node-utils")

const cwd = process.cwd()

const jsrxConfigFile = readdirSync(cwd).find(
    (fileName) => fileName === "jsrx.js" || fileName === "jsrx.ts"
)
if (!jsrxConfigFile) {
    const generateJsrx = prompt(
        `Found no 'jsrx.js' or 'jsrx.ts' file in ${cwd}. Would you like to generate one from your pakage.json?`,
        "confirm"
    )
    if (generateJsrx) {
        const language = prompt(
            `Which language would you like to generate?`,
            "select",
            {
                choices: [
                    { title: "JavaScript (jsrx.js)", value: "js" },
                    { title: "TypeScript (jsrx.ts)", value: "ts" }
                ]
            }
        )
    } else {
        throw Error("A jsrx file is required.")
    }
}

const runner =
    jsrxConfigFile === "jsrx.js" ? "node" : "npx ts-node --transpile-only"

shell(`${runner} ${jsrxConfigFile} ${process.argv[process.argv.length - 1]}`)
