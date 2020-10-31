const db = require("../db");
const fs = require("fs");
const { BIconArrowReturnLeft } = require("bootstrap-vue");

exports.createPost = (req, res, next) => {
  if (req.method == "POST") {
    let content = req.body.content;
    let user_id = req.body.user_id;
    if(req.file) {
        var imageUrl = `${req.protocol}://${req.get("host")}/images/${ req.file.filename }`;
    } else {
        var imageUrl = "";
    }
    // let id = res.locals.id

    let reqCreatePost = "INSERT INTO Posts (content, imageUrl, post_create, user_id) VALUES ('" +content + "', '" + imageUrl + "', NOW(), '" + user_id + "')";
    db.query(reqCreatePost, function(err, result) {
      if (result) {
        res.status(200).json({ result });
      } else {
        res.status(403).json({ err });
      }
    });
  }
};

exports.getAllPosts = (req, res, next) => {
  if (req.method == "GET") {
    let allPostReq =
      "SELECT Posts.id, Posts.content, Posts.imageUrl, Posts.likes_number, Posts.dislikes_number, DATE_FORMAT(Posts.post_create, '%d %b. %y - %kh%i:%s') AS post_create, Posts.user_id, Posts.comments_number, Users.first_name, Users.last_name, Users.imageUser \
            FROM Posts \
            INNER JOIN Users \
            ON Posts.user_id = Users.id \
            ORDER BY post_create \
            DESC";
    db.query(allPostReq, function(err, result) {
      if (result.length > 0) {
        res.status(200).json({ result });
      } else {
        res.status(204).json({ message: "Aucun post a été trouvé !" });
      }
    });
  }
};

exports.getOnePost = (req, res, next) => {
  if (req.method == "GET") {
    let postId = req.params.id;
    let onePost =
      "SELECT Posts.id, Posts.content, Posts.imageUrl, Posts.likes_number, Posts.dislikes_number, DATE_FORMAT(Posts.post_create, '%d %b. %y - %kh%i') AS post_create, Posts.user_id, Posts.comments_number, Users.first_name, Users.last_name, Users.imageUser\
            FROM Posts \
            INNER JOIN Users \
            ON Posts.user_id = Users.id \
            WHERE Posts.id = '" +
      postId +
      "'";

    db.query(onePost, function(err, result) {
      if (result.length > 0) {
        res.status(200).json({ result });
      } else {
        res.status(204).json({ message: "Aucun post a été trouvé !" });
      }
    });
  }
};

exports.getPostsOfCurrentUser = (req, res, next) => {
  if (req.method == "GET") {
    let user_id = req.params.id;

    let getPostsOfCurrentUser =
      "SELECT Posts.id, Posts.content, Posts.imageUrl, Posts.likes_number, Posts.dislikes_number, DATE_FORMAT(Posts.post_create, '%d %b. %y - %kh%i') AS post_create, Posts.user_id, Posts.comments_number, Users.first_name, Users.last_name, Users.imageUser \
        FROM Posts \
        INNER JOIN Users ON Posts.user_id = Users.id \
        WHERE user_id = '" +
      user_id +
      "' \
        ORDER BY post_create DESC";

    db.query(getPostsOfCurrentUser, function(err, result) {
      if (result.length > 0) {
        res.status(200).json({ result });
      } else {
        res.status(204).json({ message: "L'utilisateur n'a aucun post !" });
      }
    });
  }
};

exports.modifyPost = (req, res, next) => {
  if (req.method == "PUT") {
    let editContent = req.body.content;
    let postId = req.params.id;

    let modifyReqContent =
      "UPDATE Posts SET content = '" +
      editContent +
      "' WHERE id = '" +
      postId +
      "'";

    db.query(modifyReqContent, function(err, result) {
      if (result) {
        res.status(200).json({ message: "Le post a bien été modifié !" });
      } else {
        res.status(403).json({ message: "Une erreur est survenue !" });
      }
    });
  }
};

exports.deletePost = (req, res, next) => {
  if (req.method == "DELETE") {
    let post_id = req.params.id;
    let reqFile =
      "SELECT Posts.imageUrl FROM Posts WHERE id = '" + post_id + "'";

    db.query(reqFile, function(err, result) {
      if (result) {
        const filename = result[0].imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          let reqDeletePost = "DELETE FROM Posts WHERE id = '" + post_id + "'";
          db.query(reqDeletePost, function(err, result) {
            if (result) {
              res
                .status(200)
                .json({ message: "Le post a bien été supprimé !" });
            } else {
              res.status(403).json({ message: "Une erreur est survenue !" });
            }
          });
        });
      } else {
        return res.json({ err });
      }
    });
  }
};

exports.likePost = (req, res, next) => {
  if (req.method == "POST") {
    let user_id = req.body.user_id;
    let post_id = req.params.id;

    let ifExists =
      " \
            SELECT IF (EXISTS (SELECT * FROM Likes WHERE user_id = '" +
      user_id +
      "' AND post_id = '" +
      post_id +
      "'), '1', '0') \
            UNION ALL \
            SELECT IF (EXISTS (SELECT * FROM Unlikes WHERE user_id = '" +
      user_id +
      "' AND post_id = '" +
      post_id +
      "'), '1', '0')";

    db.query(ifExists, function(err, result) {
      var valueOne = parseInt(Object.values(result[0]));
      var valueTwo = parseInt(Object.values(result[1]));

      switch (valueOne) {
        case 0:
          let addLike =
            " \
                        INSERT INTO Likes (user_id, post_id) VALUES ('" +
            user_id +
            "', '" +
            post_id +
            "'); \
                        UPDATE Posts SET likes_number = likes_number +1 WHERE id = '" +
            post_id +
            "'";
          db.query(addLike, function(err, result) {
            if (result) {
              switch (valueTwo) {
                case 0:
                  return res
                    .status(200)
                    .json({ message: "Le post a bien été liké !" });
                  break;
                case 1:
                  let addLikeAndRemoveDislike =
                    " \
                                        DELETE FROM Unlikes WHERE user_id = '" +
                    user_id +
                    "' AND post_id = '" +
                    post_id +
                    "';\
                                        UPDATE Posts SET dislikes_number = dislikes_number -1 WHERE id = '" +
                    post_id +
                    "'";
                  db.query(addLikeAndRemoveDislike, function(err, result) {
                    if (result) {
                      return res
                        .status(200)
                        .json({
                          message: "Le dislike du post a bien été supprimé !",
                        });
                    } else {
                      return res
                        .status(403)
                        .json({ message: "Une erreur est survenue !" });
                    }
                  });
                  break;
                default:
                  return res
                    .status(404)
                    .json({
                      message:
                        "Une erreur est survenue dans le cas 0 du switch !",
                    });
              }
            } else {
              return res
                .status(403)
                .json({ message: "Une erreur est survenue !" });
            }
          });

          break;
        case 1:
          let removeLike =
            " \
                        DELETE FROM Likes WHERE user_id = '" +
            user_id +
            "' AND post_id = '" +
            post_id +
            "'; \
                        UPDATE Posts SET likes_number = likes_number -1 WHERE id = '" +
            post_id +
            "' \
                    ";

          db.query(removeLike, function(err, result) {
            if (result) {
              return res
                .status(200)
                .json({ message: "Le like a était retirer du post !" });
            } else {
              return res
                .status(403)
                .json({ message: "Une erreur est survenue !" });
            }
          });
          break;
        default:
          return res.status(404).json({ message: "Une erreur est survenue !" });
      }
    });
  }
};

exports.isLiked = (req, res, next) => {
    if (req.method == "GET") {
        let user_id = req.params.user_id;
        let post_id = req.params.post_id;

        let reqIsLiked = `SELECT IF(EXISTS (SELECT * FROM Likes WHERE post_id = ${post_id} AND user_id = ${user_id}), '1', '0')`;

        db.query(reqIsLiked, function(err, result) {
            var valueOne = parseInt(Object.values(result[0]));

            switch (valueOne) {
                case 0 :
                    return res.status(200).json(parseInt(Object.values(result[0])));
                    break;
                case 1 :
                    return res.status(200).json(parseInt(Object.values(result[0])));
                    break;
                default:
                    return res.status(404).json({ message: "Une erreur est survenue !" });
            }
        })
    }
}

exports.dislikePost = (req, res, next) => {
  if (req.method == "POST") {
    let user_id = req.body.user_id;
    let post_id = req.params.id;

    let ifExists =" \
        SELECT IF (EXISTS (SELECT * FROM Unlikes WHERE user_id = '" +user_id +"' AND post_id = '" +post_id +"'), '1', '0') \
        UNION ALL \
        SELECT IF (EXISTS (SELECT * FROM Likes WHERE user_id = '" +user_id +"' AND post_id = '" +post_id +"'), '1', '0')";

    db.query(ifExists, function(err, result) {
      var valueOne = parseInt(Object.values(result[0]));
      var valueTwo = parseInt(Object.values(result[1]));

      switch (valueOne) {
        case 0:
          let addUnlike =" \
                INSERT INTO Unlikes (user_id, post_id) VALUES ('" +user_id +"', '" +post_id +"'); \
                UPDATE Posts SET dislikes_number = dislikes_number +1 WHERE id = '" +post_id +"' \
            ";
          db.query(addUnlike, function(err, result) {
            if (result) {
              switch (valueTwo) {
                case 0:
                  return res
                    .status(200)
                    .json({ message: "Le post a bien été disliké !" });
                  break;
                case 1:
                  let addUnlikeAndRemoveLike =" \
                        DELETE FROM Likes WHERE user_id = '" +user_id +"' AND post_id = '" +post_id +"';\
                        UPDATE Posts SET likes_number = likes_number -1 WHERE id = '" +post_id +"' \
                    ";

                  db.query(addUnlikeAndRemoveLike, function(err, result) {
                    if (result) {
                      return res
                        .status(200)
                        .json({
                          message: "Le like du post a bien été supprimé !",
                        });
                    } else {
                      return res
                        .status(403)
                        .json({ message: "Une erreur est survenue !" });
                    }
                  });
                  break;
                default:
                  return res
                    .status(404)
                    .json({
                      message:
                        "Une erreur est survenue dans le cas 0 du switch !",
                    });
              }
            } else {
              return res
                .status(403)
                .json({ message: "Une erreur est survenue !" });
            }
          });

          break;
        case 1:
          let removeUnlike = " \
            DELETE FROM Unlikes WHERE user_id = '" + user_id + "' AND post_id = '" + post_id + "'; \
            UPDATE Posts SET dislikes_number = dislikes_number -1 WHERE id = '" + post_id + "'"

          db.query(removeUnlike, function(err, result) {
            if (result) {
              return res
                .status(200)
                .json({ message: "Le dislike a était retiré du post !" });
            } else {
              return res
                .status(403)
                .json({ message: "Une erreur est survenue !" });
            }
          });
          break;
        default:
          return res.status(404).json({ message: "Une erreur est survenue !" });
      }
    });
  }
};

exports.isDisliked = (req, res, next) => {
    if (req.method == "GET") {
        let user_id = req.params.user_id;
        let post_id = req.params.post_id;

        let reqIsLiked = `SELECT IF(EXISTS (SELECT * FROM Unlikes WHERE post_id = ${post_id} AND user_id = ${user_id}), '1', '0')`;

        db.query(reqIsLiked, function(err, result) {
            var valueOne = parseInt(Object.values(result[0]));

            switch (valueOne) {
                case 0 :
                    return res.status(200).json(parseInt(Object.values(result[0])));
                    break;
                case 1 :
                    return res.status(200).json(parseInt(Object.values(result[0])));
                    break;
                default:
                    return res.status(404).json({ message: "Une erreur est survenue !" });
            }
        })
    }
}

exports.commentPost = (req, res, next) => {
  if (req.method == "POST") {
    let content = req.body.content;
    let userId = req.body.userId;
    let postId = req.params.postId;

    let reqCommentPost = 'INSERT INTO Comments (comment, comment_create, user_id, post_id) VALUES ("' + content + '", NOW(), "' + userId + '", "' + postId + '"); UPDATE Posts SET comments_number = comments_number+1 WHERE id = "' + postId + '";';
    db.query(reqCommentPost, function(err, result) {
      if (result) {
        return res
          .status(200)
          .json({ message: "Le commentaire a bien été posté !" });
      } else {
        return res.status(403).json({ message: "Une erreur est survenue !" });
      }
    });
  }
};


exports.modifyCommentPost = (req, res, next) => {
  if (req.method == "PUT") {
    let content = req.body.content;
    let userId = req.body.user_id;
    let idComment = req.params.idComment;
    let postId = req.params.postId;

    let reqModifyComment = 'UPDATE Comments SET comment = "' + content + '", edit_at = NOW() WHERE user_id = "' + userId + '" AND id = "' + idComment + '" AND post_id = "' + postId + '";';
    db.query(reqModifyComment, function(err, result) {
      if (result) {
        return res
          .status(200)
          .json({ message: "Le commentaire a bien été modifié !" });
      } else {
        return res.status(403).json({ message: "Une erreur est survenue !" });
      }
    });
  }
};

exports.deleteCommentPost = (req, res, next) => {
  if (req.method == "DELETE") {
    let idComment = req.params.idComment;
    let postId = req.params.postId;
    reqDeletePost = " \
            DELETE FROM Comments WHERE id = '" + idComment + "' AND post_id = '" + postId + "'; \
            UPDATE Posts SET comments_number = comments_number -1 WHERE id = '" + postId + "'";

    db.query(reqDeletePost, function(err, result) {
      if (result) {
        return res
          .status(200)
          .json({ message: "Le commentaire a bien été supprimé !" });
      } else {
        return res.status(403).json({ message: "Une erreur est survenue !" });
      }
    });
  }
};

exports.getAllCommentOfPost = (req, res, next) => {
  if (req.method == "GET") {
    let postId = req.params.postId;

    let reqIfResponse =
      "SELECT IF ( EXISTS ( SELECT * FROM Comments WHERE post_id = '" + postId + "'), 'true', 'false')";
    db.query(reqIfResponse, function(err, result) {
      if (Object.values(result[0]) == "true") {
        let reqGetAllCommentOfPost =
          "SELECT Posts.id, Posts.comments_number, Comments.id as comment_id, Comments.comment, DATE_FORMAT(Comments.comment_create, '%d %b. %y - %kh%i') AS comment_create, Comments.user_id, Comments.post_id, Comments.edit_at, Users.first_name, Users.last_name, Users.imageUser FROM Posts INNER JOIN Comments ON Posts.id = Comments.post_id INNER JOIN Users ON Comments.user_id = Users.id WHERE Posts.id = '" + postId + "' AND Posts.comments_number > 0 ORDER BY Comments.comment_create DESC";
        db.query(reqGetAllCommentOfPost, function(err, result) {
          if (result) {
            return res.status(200).json({ result });
          } else {
            return res
              .status(200)
              .json({ erreur: "Une erreur est survenue !" });
          }
        });
      } else {
        return res
          .status(203)
          .json({ message: "Aucun commentaire n'a été trouvé !" });
      }
    });
  }
};
