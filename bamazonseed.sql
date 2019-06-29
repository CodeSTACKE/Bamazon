create table products(item_id integer(10) primary key auto_increment not null,product_name varchar(50) not null, department_name varchar(50)
 not null, price decimal(10,2),stock_quantity integer(10));
select item_id, product_name,department_name,price and stock_quantity from products;

insert into products (product_name,department_name,price,stock_quantity) values("paper towels,","Household supplies",22.20,20),
("birthday supplies","Household supplies",22.20,20),("Band-aid","Healthcare",2.20,200),('Vaseline Petroleum Jelly Original', 'Health care', 1.00, 100),('Pure Protein Bars', 'Sports Nutrition', 1.00, 100),
('Batteries','Household Batteries', 1.20, 100);

select * from products;