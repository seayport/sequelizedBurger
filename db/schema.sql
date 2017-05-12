### Schema

-- CREATE DATABASE thevortex_db;

USE thevortex_db;

CREATE TABLE sequelburgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false, 
	PRIMARY KEY (id)
);








