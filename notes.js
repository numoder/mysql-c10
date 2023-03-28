/*DAY 2

https://www.npmjs.com/package/mysql2

Npm init -y
Npm Install mysql2
Touch index.js


Delete package-lock.json and node_modules
Then: npm install / npm I
You only need package.json!!! And your code

Touch .gitignore

Add node_modules, .vscode, and package-lock.json


---FIRST QUERY---
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);
*/