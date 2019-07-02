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
------------------------------------------------------------------------------------------------------------------------------------
# Welcome Screen
<img src="(https://user-images.githubusercontent.com/48188772/60479093-327bd500-9c4a-11e9-9bf4-5fd35c5fca8a.png)"/>
#  Purchase order
 <img src="https://user-images.githubusercontent.com/48188772/60479134-593a0b80-9c4a-11e9-80d5-fb1d32c5997d.png" height:20px/>
Again Purchase
https://user-images.githubusercontent.com/48188772/60479173-7373e980-9c4a-11e9-8f34-b455ee44f322.png
# Validation on ID(Id should be numbers and greater then 0 and less then 6)
https://user-images.githubusercontent.com/48188772/60479204-8c7c9a80-9c4a-11e9-99f1-333c86cf44af.png

# Validation on Units(It should take numbers and not greater then 0)
https://user-images.githubusercontent.com/48188772/60479262-c6e63780-9c4a-11e9-8262-315e9fc30e93.png

# Quit option screen
(https://user-images.githubusercontent.com/48188772/60479285-dd8c8e80-9c4a-11e9-857f-bb7f6e76a202.png)
