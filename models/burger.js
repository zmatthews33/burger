var orm = require("../config/orm.js");

//Define the burgers variable with the methods from ORM
var burgers = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    insert: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res);
        })
    },
    update: function (burgerId, cb) {
        orm.updateOne(burgerId, function (res) {
            cb(res);
        })
    }
}


module.exports = burgers;
