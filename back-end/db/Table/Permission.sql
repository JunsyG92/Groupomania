CREATE TABLE Permission (
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    permission VARCHAR (40) NOT NULL,
    description TEXT NOT NULL
) ENGINE = InnoDB;