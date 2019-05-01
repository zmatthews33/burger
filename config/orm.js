const connection = require("./connection.js");



const orm = {

    //SELECTS ALL burgers that have not been 'devoured'
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    //INSERTS new burger into db
    insertOne: function (burgerName, cb) {
        var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?, false)";
        console.log(burgerName, "here is the burger name");
        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })

    },

    //UPDATES a burger to devoured
    updateOne: function (burgerId, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [burgerId], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });

    }
}


module.exports = orm;