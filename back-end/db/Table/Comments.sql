CREATE TABLE Comments (
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    comment VARCHAR(280) NOT NULL,
    comment_create DATETIME,
    user_id SMALLINT UNSIGNED NOT NULL,
    post_id SMALLINT UNSIGNED NOT NULL,
    edit_at DATETIME,
    CONSTRAINT fk_user_ud_comment
        FOREIGN KEY (user_id)
        REFERENCES Users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_id_post_comment
        FOREIGN KEY (post_id)
        REFERENCES Posts(id)
        ON DELETE CASCADE

) ENGINE = InnoDB;