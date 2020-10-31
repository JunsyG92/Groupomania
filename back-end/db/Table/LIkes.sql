CREATE TABLE Likes (
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    post_id SMALLINT UNSIGNED NOT NULL,
    user_id SMALLINT UNSIGNED NOT NULL,

    CONSTRAINT fk_user_id_likes
        FOREIGN KEY (user_id)
        REFERENCES Users(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_id_post_likes
        FOREIGN KEY (post_id)
        REFERENCES Posts(id)
        ON DELETE CASCADE

) ENGINE = InnoDB;