-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: nuestra_huerta_final
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e7e932a2-2640-42eb-9d39-313adcfd7e07` (`user_id`),
  CONSTRAINT `FK_e7e932a2-2640-42eb-9d39-313adcfd7e07` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_detail`
--

DROP TABLE IF EXISTS `cart_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_23b55a1c-8657-4f46-b06d-8b75d8530260` (`product_id`),
  KEY `FK_007c036b-3eed-4948-8258-1b6047e2603f` (`cart_id`),
  CONSTRAINT `FK_007c036b-3eed-4948-8258-1b6047e2603f` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `FK_23b55a1c-8657-4f46-b06d-8b75d8530260` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_detail`
--

LOCK TABLES `cart_detail` WRITE;
/*!40000 ALTER TABLE `cart_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'frutas'),(2,'verduras'),(3,'bolsones');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `section_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_130e3d8e-130f-4a5d-8f37-6cdec9ddc552` (`category_id`),
  KEY `FK_117a2f96-c2f7-4f57-90e1-edbe1f4ec9d7` (`section_id`),
  CONSTRAINT `FK_117a2f96-c2f7-4f57-90e1-edbe1f4ec9d7` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_130e3d8e-130f-4a5d-8f37-6cdec9ddc552` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Banana',350,'Banana ecuatoriana x 6 unidades',0,15,1,2,'producto-1660049112643.jpg'),(4,'Mandarina',320,'Mandarina de estación x kilo',0,15,1,1,'producto-1660049211731.jpg'),(5,'Frutilla',690,'Frutillas x 250 g',0,15,1,1,'producto-1660049261533.png'),(6,'Pera',270,'Pera Williams x kilo',0,15,2,1,'producto-1660049330260.jpg'),(7,'Pomelo Rosado',630,'Pomelo Rosado x kilo',15,15,1,1,'producto-1660049391577.jpg'),(8,'Naranja',170,'Naranja para jugo x kilo',0,15,1,1,'producto-1660049438326.jpg'),(9,'Kiwi',380,'Kiwi orgánico x 500 g',15,15,2,1,'producto-1660049539065.jpg'),(10,'Lechuga',210,'Lechuga mantecosa x planta (200 g aprox)',15,15,2,2,'producto-1660049591948.jpg'),(11,'Zapallo Kabutia',275,'Zapallo Kabutia x 15 kilo aprox',0,15,3,2,'producto-1660049635452.jpg'),(12,'Bolsón Verduras',1360,'1 kg Papa blanca 1 kg Zapallo anco 1/2 kg Cebolla Común 1 kg Batata 2 atados de Espinaca y 400 g de Champignón',30,15,4,3,'producto-1660049703889.png'),(13,'Manzana Verde',367,' Manzanas Verdes Granny Smith x kilo',0,15,2,1,'producto-1660049942335.jpg'),(14,'Manzana Roja',290,'Manzana Pink Lady x kilo',15,15,2,1,'producto-1660050003960.jpg'),(15,'Limón',210,'Limón tucumano x kilo',15,15,2,1,'producto-1660050046754.jpg'),(16,'Papa Blanca',310,'Papa blanca x kilo',15,15,3,2,'producto-1660050092323.jpg'),(17,'Batata',320,'Batata roja x kilo',15,15,3,2,'producto-1660050229430.jpg'),(18,'Cebolla',410,'Cebolla x kilo',15,15,3,2,'producto-1660050299339.jpg'),(19,'Champignón',510,'Champignon x 200 g',0,15,2,2,'producto-1660050340367.jpg'),(20,'Espinaca',210,'Espinaca x atado (Aprox 400 g)',0,15,2,2,'producto-1660050380112.jpg'),(21,'Zapallo Anco',190,'Zapallo Anco (chico) x 12 kilo aprox',0,15,3,2,'producto-1660050432178.jpg'),(22,'Bolsón Frutas',1250,'1 kg Manzana Roja 1 kg Naranja 6 Bananas 1 kg Kiwi 1 kg Pomelo Rojo y 1 kg Pera',15,15,4,3,'producto-1660050544413.png'),(23,'Bolsón Combinado',1420,'1 kg Naranja 6 Bananas 1/2 kg Cebolla Común 1 kg Batata y 400 g de Champignón',30,15,4,3,'producto-1660050589014.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'nuestras frutas'),(2,'destacados del mes'),(3,'nuestras verduras'),(4,'mas visitados');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_method` varchar(255) NOT NULL,
  `payment_type` varchar(255) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6517096f-afa9-4a9f-b54c-748dfcc42633` (`cart_id`),
  CONSTRAINT `FK_6517096f-afa9-4a9f-b54c-748dfcc42633` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `rol_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bb5139ee-f45d-4f87-9482-05f714f5811e` (`rol_id`),
  CONSTRAINT `FK_bb5139ee-f45d-4f87-9482-05f714f5811e` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin2','adminuser@gmail.com','$2a$10$feu/ZlwuZdGWY/HJyuO0T.ybE7DHLExH5b8W2ZRNQ4mgTKQKHd8Dm','1658422449437_img.png',1),(2,'Juan Pablo','Scrigna','jps@gmail.com','$2b$10$3udAzJkDzTsZdD9V0WFWXOs7Fttq.iZ7KRgBuRKE8cFInVQhqIROS','1659481496140_img.jpeg',1),(3,'tobi','Scrigna','t@gmail.com','$2b$10$W0N6qhFeYUi8GtsWixNPI.TKTHNVykyJTNaTZk0ter8bRsGvAKHse','1659985308273_img.jpeg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'nuestra_huerta_final'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-09 16:48:36
