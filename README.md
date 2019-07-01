# Bamazon
    In this activity or assignment, i created  a Amazon-like storefront using  the MySQL. The app will take in orders 
    from customers and deplete stock from the store's inventory.
    
# Expected Outcomes
    $ node bamazonCustomer.js
    Here are all the Products List...
    ----------------------------------------------------------------------
    ITEM_ID | PRODUCT_NAME                      | PRICE | STOCK_QUANTITY
    1       | paper towels,                     | 22.2  | 100            
    2       | birthday supplies                 | 22.2  | 100            
    3       | Band-aid                          | 2.2   | 200            
    4       | Vaseline Petroleum Jelly Original | 1     | 100           
    5       | Pure Protein Bars                 | 1     | 100            
    6       | Batteries                         | 1.2   | 100           
    ----------------------------------------------------------------------
    ? Enter the ID of the product would like to buy 1
    ? Enter the how many units of the product would like to buy 30
    
#Code by Command

#Require & Local Linked files
                 
    // packages included
    var mysql = require("mysql");
    require("dotenv").config();
    var inquier = require("Inquirer");
    var chalk = require("chalk");
    var columnify = require('columnify');
