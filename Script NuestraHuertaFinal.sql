DROP DATABASE IF EXISTS `nuestra_huerta_final`;
CREATE DATABASE `nuestra_huerta_final`;
USE `nuestra_huerta_final`;


CREATE TABLE `products` (
   `id` INT NOT NULL,
   `name` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `description` VARCHAR(255),
   `discount` INT,
   `stock` INT,
   `section_id` INT NOT NULL,
   `category_id` INT NOT NULL,
   `image` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `rol_id` INT NOT NULL,
   `authenticated` BIT NOT NULL DEFAULT 0,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `rol_category` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sections` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart` (
   `id` INT NOT NULL,
   `user_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart_detail` (
   `id` INT NOT NULL,
   `quantity` INT NOT NULL,
   `product_id` INT NOT NULL,
   `cart_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ticket` (
   `id` INT NOT NULL,
   `payment_method` VARCHAR(255) NOT NULL,
   `payment_type` VARCHAR(255) NOT NULL,
   `cart_id` INT NOT NULL,
   `total` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_130e3d8e-130f-4a5d-8f37-6cdec9ddc552` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products` ADD CONSTRAINT `FK_117a2f96-c2f7-4f57-90e1-edbe1f4ec9d7` FOREIGN KEY (`section_id`) REFERENCES `sections`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `users` ADD CONSTRAINT `FK_bb5139ee-f45d-4f87-9482-05f714f5811e` FOREIGN KEY (`rol_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `cart` ADD CONSTRAINT `FK_e7e932a2-2640-42eb-9d39-313adcfd7e07` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `cart_detail` ADD CONSTRAINT `FK_23b55a1c-8657-4f46-b06d-8b75d8530260` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `cart_detail` ADD CONSTRAINT `FK_007c036b-3eed-4948-8258-1b6047e2603f` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`id`)  ;

ALTER TABLE `ticket` ADD CONSTRAINT `FK_6517096f-afa9-4a9f-b54c-748dfcc42633` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`id`)  ;