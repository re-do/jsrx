import { generateFileContents } from "../generateJsrx"

const scripts = {
    sayHello: "echo hello",
    sayGoodBye: "echo goodBye"
}

it("generates js", () => {
    expect(generateFileContents(scripts, { language: "js" })).toMatchSnapshot()
})

it("generates ts", () => {
    expect(generateFileContents(scripts, { language: "ts" })).toMatchSnapshot()
})
