// packages included
var mysql=require("mysql");
require("dotenv").config();
var inquier=require("Inquirer");
var chalk=require("chalk");
var columnify = require('columnify');
var maintable=[];

const log=console.log;

// Database Connection
var connection=mysql.createConnection({
    host: "localhost",
    port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PASSWORD,
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
    readProducts();
});

// Function used to display data from database.
function readProducts() {
    log(chalk.green("Here are all the Products List...\n"));
    log(chalk.red("----------------------------------------------------------------------"));
    var query=connection.query("select item_id, product_name, price, stock_quantity from products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
     for(var i=0;i<res.length;i++)
      {
        maintable.push(res[i]);
     }
     var columns = columnify(maintable, {
        columnSplitter: ' | '
      });
     log(chalk.yellow(columns));
      
        // ${res.product_name}  ${res.price} ${res.stock_quantity})
     log(chalk.red("----------------------------------------------------------------------"));
     connection.end();
    });
  }
  