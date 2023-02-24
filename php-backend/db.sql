CREATE DATABASE IF NOT EXISTS id20324173_pheelix_products;

USE id20324173_pheelix_products;

CREATE TABLE IF NOT EXISTS `id20324173_pheelix_products`.`products`(
	`sku` VARCHAR(255) NOT NULL ,
	`name` VARCHAR(255) NOT NULL ,
	`price` DECIMAL(11, 2) NOT NULL ,
	`type` ENUM('DVD','Furniture','Book','') NOT NULL ,
	`description` VARCHAR(255) NOT NULL ,
	PRIMARY KEY (`sku`))
	ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `products`
(`sku`, `name`, `price`, `type`, `description`) VALUES
('GGWP0007', 'War and Peace', '20.00', 'Book', 'Weight: 2KG'),
('TR120555', 'Chair', '40.00', 'Furniture', 'Dimension: 24x45x15'),
('JVC200123', 'Acme Disc', 1.00, 'DVD', 'Size: 700 MB');