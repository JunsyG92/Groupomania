const db = require('../db');

exports.isAdmin = (req, res, next) => {
    if (req.method == "GET") {
        let user_id = req.params.id;

        let reqIsAdmin = `SELECT Users.user_permission FROM Users WHERE id = ${user_id} `;

        db.query(reqIsAdmin, function(err, result) {
            if(result) {
                res.status(200).json({result})
            } else {
                res.status(404).json({ erreur: "Une erreur est survenue..." })
            }
        })
    }
}

exports.moderationPost = (req, res, next) => {
    if (req.method == "PUT") {
        let content = req.body.content;
        let post_id = req.params.post_id
        
        let reqModerateComment = `UPDATE Posts SET content = '${content}' WHERE id = ${post_id}`;

        db.query(reqModerateComment, function(err, result) {
            if(result) {
                res.status(200).json({result})
            } else {
                res.status(404).json({ err })
            }
        })
    }
}

exports.moderationComment = (req, res, next) => {
    if (req.method == "PUT") {
        let comment = req.body.comment;
        let post_id = req.params.post_id
        let idComment = req.params.idComment

        let reqModerateComment = `UPDATE Comments SET comment = '${comment}' WHERE post_id = ${post_id} AND id = ${idComment}`;

        db.query(reqModerateComment, function(err, result) {
            if(result) {
                res.status(200).json({result})
            } else {
                res.status(404).json({ err })
            }
        })
    }
}
