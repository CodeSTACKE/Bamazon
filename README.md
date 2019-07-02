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
    
# Code by Command

# Require & Local Linked files
                 
    // packages included
    var mysql = require("mysql");
    require("dotenv").config();
    var inquier = require("Inquirer");
    var chalk = require("chalk");
    var columnify = require('columnify');


# Screenshots of the Bamazon App
welcome screen, purchase order,Again Purchase, Validation on id, Validation on Unit, Quit option
------------------------------------------------------------------------------------------------------------------------------------   
![welcome_screen](https://user-images.githubusercontent.com/48188772/60480034-a370bc00-9c4d-11e9-9732-9b5b39c8f058.png "welcome screen")

![purchase_order1](https://user-images.githubusercontent.com/48188772/60480076-d3b85a80-9c4d-11e9-9850-ba4f9f2527e9.png "purchase_order")

![again_purchase](https://user-images.githubusercontent.com/48188772/60480096-e16de000-9c4d-11e9-9e9c-1f9d609079cc.png "Again_purchase_order")

![validation_on_id](https://user-images.githubusercontent.com/48188772/60480107-ecc10b80-9c4d-11e9-8233-3d724e0d7c4b.png "Validation on id")

![validation_2](https://user-images.githubusercontent.com/48188772/60480125-f9ddfa80-9c4d-11e9-81cd-b358b1847891.png " Validation on units")

![quit_option](https://user-images.githubusercontent.com/48188772/60480136-07938000-9c4e-11e9-8ccf-16eab2295938.png "Quit option")

