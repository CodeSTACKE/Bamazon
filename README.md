# Bamazon
    In this activity or assignment, i created  a Amazon-like storefront using  the MySQL. The app will take in orders 
    from customers and deplete stock from the store's inventory.
    
##### Description
In this assignment students were tasked to create an app that:

    1.Presents a list of products to users.
    2.Enables users to select a product and a quantity.
    3.Updates the SQL database with the change in the inventory.
    
##### Review of the App
    * Set up the files and database on your local machine
    * Git clone this repository -> https://github.com/jyotigithub1/Bamazon
    * Use the file "bamazonseed.sql" to create the database,table,populate the data.
    * Modify the "bamazonCustomer.js file line 20 with the password of your localhost

##### Set up the node modules and run the JavaScript file.
   * Install inquirer -> https://www.npmjs.com/package/inquirer
   * Install mysql -> https://www.npmjs.com/package/mysql
   * Install columnify -> https://www.npmjs.com/package/columnify
   * Install chalk-> https://www.npmjs.com/package/chalk
   * Install dotenv->https://www.npmjs.com/package/dotenv
   * At the command line enter -> node bamazonCustomer.js
    
##### Expected Outcomes
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
    
##### Technologies used
1.node/mysql/Javascript/npm

##### Require & Local Linked files
                 
    // packages included
    var mysql = require("mysql");
    require("dotenv").config();
    var inquier = require("Inquirer");
    var chalk = require("chalk");
    var columnify = require('columnify');


##### Screenshots of the Bamazon App
##### welcome screen, purchase order,Again Purchase, Validation on id, Validation on Unit, Quit option
------------------------------------------------------------------------------------------------------------------------------------   
![welcome_screen](https://user-images.githubusercontent.com/48188772/60480034-a370bc00-9c4d-11e9-9732-9b5b39c8f058.png "welcome screen")

![insufficient_quantity](https://user-images.githubusercontent.com/48188772/60482900-edab6a80-9c58-11e9-9a7f-1b52aefa1d37.png "Insufficent Quanity")

![purchase_order1](https://user-images.githubusercontent.com/48188772/60480076-d3b85a80-9c4d-11e9-9850-ba4f9f2527e9.png "purchase_order")

![again_purchase](https://user-images.githubusercontent.com/48188772/60480096-e16de000-9c4d-11e9-9e9c-1f9d609079cc.png "Again_purchase_order")

![validation_on_id](https://user-images.githubusercontent.com/48188772/60480107-ecc10b80-9c4d-11e9-8233-3d724e0d7c4b.png "Validation on id")

![validation_2](https://user-images.githubusercontent.com/48188772/60480125-f9ddfa80-9c4d-11e9-81cd-b358b1847891.png " Validation on units")

![quit_option](https://user-images.githubusercontent.com/48188772/60480136-07938000-9c4e-11e9-8ccf-16eab2295938.png "Quit option")

###### Video Demonstration of Bamazon app, click on the link to check.
https://drive.google.com/file/d/1e-EdjDvhanwqDqVc5RKFpPF-AiRM1-LF/view
