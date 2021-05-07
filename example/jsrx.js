const { jsrx, $, shell } = require("jsrx")

jsrx({
    dev: {
        sayHello: $(`echo Hello`),
        sayGoodBye: $(`echo Goodbye`)
    },
    prod: {},
    shared: {}
})
