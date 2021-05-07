
import { jsrx, $, shell } from "jsrx"

jsrx({
    dev: {
        sayHello: $("echo Hello"),
        sayGoodBye: $("echo Good Bye")
    },
    prod: {},
    shared: {}
})
