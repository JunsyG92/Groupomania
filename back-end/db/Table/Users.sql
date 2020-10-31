CREATE TABLE Users (
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    imageUser VARCHAR(255),
    bannerUser VARCHAR(255),
    date_register DATETIME NOT NULL,
    login_date DATETIME,
    user_permission SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_user_permission
        FOREIGN KEY (user_permission)
        REFERENCES Permission(id)
) ENGINE = InnoDB;