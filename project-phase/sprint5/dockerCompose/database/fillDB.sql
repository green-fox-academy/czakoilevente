CREATE DATABASE hellodb;
USE hellodb;
CREATE TABLE `entries` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `entry` VARCHAR(60),
    KEY `id` (`id`) USING BTREE,
    PRIMARY KEY (`id`)
);
CREATE USER "rotor"@'localhost' IDENTIFIED BY 'rotor';
GRANT ALL PRIVILEGES ON database.hellodb TO "rotor"@'localhost';
FLUSH PRIVILEGES;
