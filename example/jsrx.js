const { jsrx, $, shell } = require("jsrx")

jsrx({
    dev: {
        sayHello: $(`echo Hello`),
        sayGoodBye: $(`echo GoodBye`),
        "handle:non-alpha": $(`echo Handled`)
    },
    prod: {},
    shared: {}
})
