CREATE TABLE Posts (
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    content VARCHAR(280),
    imageUrl VARCHAR(255),
    likes_number SMALLINT UNSIGNED DEFAULT 0,
    unlikes_number SMALLINT UNSIGNED DEFAULT 0,
    dislikes_number SMALLINT UNSIGNED DEFAULT 0,
    comments_number SMALLINT UNSIGNED DEFAULT 0,
    post_create DATETIME NOT NULL,
    user_id SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_user_id_post
        FOREIGN KEY (user_id)
        REFERENCES Users(id)
        ON DELETE CASCADE
) ENGINE = InnoDB;