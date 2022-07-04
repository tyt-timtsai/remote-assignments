CREATE DATABASE assignment;
USE `assignment`;
CREATE TABLE `user`(
	`id` INT NOT NULL UNIQUE AUTO_INCREMENT,
    `email` VARCHAR(64) NOT NULL UNIQUE,
    `password` VARCHAR(64) NOT NULL,
    PRIMARY KEY(`id`)
);

DROP TABLE user;
-- 新增屬性
-- ALTER TABLE `user` ADD `address` VARCHAR(255)
-- 刪除屬性
-- ALTER TABLE `user` DROP COLUMN `address`

INSERT INTO `user` VALUE(1, '123@gmail.com','123123');
-- INSERT INTO `user` (`email`, `password`) VALUE('456@gmail.com','000456');
SELECT * FROM user;