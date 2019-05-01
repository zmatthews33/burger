var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "czxls1oce9987mh5",
    password: "	scz4195wwhs4tzul",
    database: "uzvaezb2bhw4t3qf"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
