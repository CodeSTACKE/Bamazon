// packages included
var mysql = require("mysql");
require("dotenv").config();
var inquier = require("Inquirer");
var chalk = require("chalk");
var columnify = require('columnify');
var maintable = [];

const log = console.log;

// Database Connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: process.env.DB_PASSWORD,
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    readProducts();

});

// Function used to display data from database.
function readProducts() {
    log(chalk.green("Here are all the Products List...\n"));
    log(chalk.red("----------------------------------------------------------------------"));
       var query = connection.query("select item_id, product_name, price, stock_quantity from products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (var i = 0; i < res.length; i++) {
            maintable.push(res[i]);
        }
        var columns = columnify(maintable, {
            columnSplitter: ' | '
        });
        log(chalk.yellow(columns));
        log(chalk.red("----------------------------------------------------------------------"));
        userDisplay();
    });
 

}
//userdisplay function
  function userDisplay() {
    inquier.prompt([
        {
            type: "text",
            name: "id",
            message: "Enter the ID of the product would like to buy"
        },
        {
            type: "text",
            name: "stock_quantity",
            // validate:function input(stock_quantity){
            //     // var done = this.async();
            //     

            //     if(isNaN(stockQuantity )){
            //         log('You need to provide a number,should be greater then 0');
            //     }
            // },
            message: "Enter the how many units of the product would like to buy"
        }
    ]).then(function (response) {
        var userstock = parseInt(response.stock_quantity);
        var item_id = parseInt(response.id);
        log(item_id);
        var query = connection.query("select * from  products where?", { item_id: item_id }, function (err, res) {

            if (err) throw err;
            log("User STOCK " + userstock);
            var stockQuantity = parseInt(res[0].stock_quantity);
            log("STOCK from table " + stockQuantity);
            if (stockQuantity > userstock) {
                var updatedstock = stockQuantity - userstock;
                console.log(updatedstock)
               tableupdate(updatedstock, item_id,userstock);
             }
            else {
                log(chalk.red("-------------------------------------------------------------"));
                log("Insufficient quantity!,Try after Sometime");
                log(chalk.red("-------------------------------------------------------------"));
            }
            
        });
       
    });

}
function confirm() {
    inquier.prompt([
        {
            type: "list",
            name: "proceed",
            choices:["Want to make more purchases","Want to Quit"]

        },
       ]).then(function (confirm) {
        if(confirm.proceed==='Want to make more purchases'){
            maintable=[];
            readProducts();
        }
        else if(confirm.proceed==='Want to Quit'){
            log("Thanks for Shopping with us..See you Soon..!!");
            connection.end();
        }
    });

}
function tableupdate(updatedstock, item_id,userstock ) {
    var p=false;
    var query = connection.query("UPDATE products SET ? WHERE ?",
        [
            {

                stock_quantity: updatedstock
            },
            {
                item_id: item_id
            }
        ],
        function (err, res) {
            if (err) throw err;
            var updatedrow =  res.affectedRows;
            log(updatedrow);
            if (updatedrow) {
                var query = connection.query("select * from  products where?",
                 { item_id: item_id }, function (err, sel_res) {
              log("You have Sucessfully purchased "+sel_res[0].product_name);
              var totalprice = sel_res[0].price * userstock;
              log(chalk.red("-------------------------------------------------------------"));
              log(chalk.blue("Your Total Cost of Your  Purchase is  ::" +"$" + totalprice));
              log(chalk.red("-------------------------------------------------------------"));
            //    connection.end();
               confirm() ;
        });
            }
            else {
                log("Error in Updating, try after Sometime");
            }
            
        });
       


}


