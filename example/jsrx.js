const { jsrx, $, shell } = require("jsrx")

jsrx({
    dev: {
        sayHello: $(`echo Hello`),
        sayGoodBye: $(`echo Goodbye`),
        "handle:non-alpha": $(`echo handled`)
    },
    prod: {},
    shared: {}
})
