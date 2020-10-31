CREATE TABLE Dislikes (
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    post_id SMALLINT UNSIGNED NOT NULL,
    user_id SMALLINT UNSIGNED NOT NULL,

    CONSTRAINT fk_user_id_dislikes
        FOREIGN KEY (user_id)
        REFERENCES Users(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_id_post_dislikes
        FOREIGN KEY (post_id)
        REFERENCES Posts(id)
        ON DELETE CASCADE

) ENGINE = InnoDB;

