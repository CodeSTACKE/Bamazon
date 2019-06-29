drop database if exists bamazon;
create database bamazon;
use bamazon;
drop table if exists products;
create table products(item_id integer(10) primary key auto_increment not null,product_name varchar(50) not null, department_name varchar(50)
 not null, price decimal(10,2),stock_quantity integer(10));
