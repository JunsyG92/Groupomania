const db = require('../db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {
    if (req.method == "POST") {
        var email = encodeURI(req.body.email);
        var password = encodeURI(req.body.password);
        var first_name = encodeURI(req.body.first_name);
        var last_name = encodeURI(req.body.last_name);
        var imageUser = req.body.imageUser;


        bcrypt.hash(password, 10, function (err, hash) {

            let sqlSignup = "INSERT INTO Users (email, password, first_name, last_name, date_register, imageUser) VALUES ('" + email + "', '" + hash +"', '" + first_name +"', '" + last_name +"', NOW(), '" + imageUser + "')"
            db.query(sqlSignup, function(err, result) {
                if (!err) {
                    let getIdUser = "SELECT Users.id, Users.first_name, Users.last_name, Users.imageUser, Users.bannerUser FROM Users WHERE email = '" + email + "'";
                    db.query(getIdUser, function(err, result) {
                        if (!err) {
                            res.status(200).json({
                                email: result[0].email,
                                first_name: result[0].first_name,
                                last_name: result[0].last_name,
                                image: result[0].imageUser,
                                banner: result[0].bannerUser,
                                token: jwt.sign(
                                    {userId: result[0].id},
                                    process.env.SECRET_TOKEN,
                                    { expiresIn: '24h' }
                                )
                            })
                        } else {
                            console.log(err)
                        }
                    })
                } else {
                    console.log(err)
                }
            })
        })
    }
}

exports.login = (req, res, next) => {
    if (req.method == "POST") {
        const email = req.body.email;
        var reqEmailUser = "SELECT Users.id, Users.email, Users.password, Users.first_name, Users.last_name, Users.imageUser, Users.bannerUser, Users.user_permission FROM Users WHERE email = '" + email + "'";
        db.query(reqEmailUser, function(err, result) {
            if(err) {
                throw err;
            }
            if (result.length == 0) {
                return res.status(404).json({ message: 'Aucun utilisateur trouvé !' })
            } else {
                let hash = bcrypt.compareSync(req.body.password, result[0].password)
                if (hash) {
                    var userLogin = "UPDATE Users SET login_date = NOW() WHERE email = '" + email + "'";
                    db.query(userLogin, function(err, result) {
                    })
                    return res.status(200).json({
                        email: result[0].email,
                        first_name: result[0].first_name,
                        last_name: result[0].last_name,
                        image: result[0].imageUser,
                        banner: result[0].bannerUser,
                        user_permission: result[0].user_permission,
                        token: jwt.sign(
                            {userId: result[0].id},
                            process.env.SECRET_TOKEN,
                            { expiresIn: '24h' }
                        )
                    })
                } else {
                    return res.status(403).json({ message: 'Mauvais mot de passe !' })
                }
            }
        })
    }
}

exports.deleteUser = (req, res, next) => {
    if (req.method == "DELETE") {
        let user_id = req.params.id
        var reqDeleteUser = "DELETE FROM Users WHERE id = '" + user_id + "'"


        db.query(reqDeleteUser, function(err,result) {
            if (result) {
                res.status(200).json({ message : "L'utilisateur a bien été supprimé !"})
            } else {
                console.log(err)
            }
        })
    }
}

exports.updateIdentity = (req, res, next) => {
    if (req.method == "PUT") {
        let user_id = req.params.id;
        let first_name_update = req.body.first_name
        let last_name_update = req.body.last_name
        var reqUpdateUser = "UPDATE Users SET first_name = '" + first_name_update + "', last_name = '" + last_name_update + "' WHERE id = '" + user_id + "'";
        db.query(reqUpdateUser, function (err, result) {
            if (result) {
                res.status(200).json({ message : "L'utilisateur a bien été modifié !"})
            } else {
                console.log(err)
            }
        })
    }
}
exports.updatePassword = (req, res, next) => {
    if (req.method == "PUT") {
        let user_id = req.params.id;
        var password = encodeURI(req.body.password);        

        bcrypt.hash(password, 10, function (err, hash) {
            var reqModifyUser = "UPDATE Users SET password = '" + hash + "' WHERE id = '" + user_id + "'";
            db.query(reqModifyUser, function (err, result) {
                if (result) {
                    res.status(200).json({ message : "L'utilisateur a bien été modifié !"})
                } else {
                    console.log(err)
                }
            })
        })
    }
}
exports.updatePicture = (req, res, next) => {
    if (req.method == "PUT") {
        let user_id = req.params.id;
        var imageUser = `${req.protocol}://${req.get('host')}/images/user/avatar/${req.file.filename}`; 

        var reqModifyUserPciture = "UPDATE Users SET imageUser = '" + imageUser + "' WHERE id = '" + user_id + "'";
        db.query(reqModifyUserPciture, function (err, result) {
            if (result) {
                res.status(200).json({ imageUser })
            } else {
                console.log(err)
            }
        })
    }
}
exports.updateBanner = (req, res, next) => {
    if (req.method == "PUT") {
        let user_id = req.params.id;
        var bannerUser = `${req.protocol}://${req.get('host')}/images/user/banner/${req.file.filename}`; 

        var reqModifyUserPciture = "UPDATE Users SET bannerUser = '" + bannerUser + "' WHERE id = '" + user_id + "'";
        db.query(reqModifyUserPciture, function (err, result) {
            if (result) {
                res.status(200).json({ bannerUser })
            } else {
                console.log(err)
            }
        })
    }
}

exports.getUser = (req, res, next) => {
    if (req.method == "GET") {
        let userId = req.params.id;

        let reqGetUser = "SELECT Users.first_name, Users.last_name, Users.imageUser, Users.bannerUser FROM Users WHERE id = '" + userId + "'";
        db.query(reqGetUser, function(err, result) {
            if (result) {
                res.status(200).json({ result })
            } else {
                console.log(err)
            }
        })
    }
}

exports.returnPassword = (req, res, next) => {
    if (req.method == "GET") {
        let user_id = req.params.id
        let getPassword = "SELECT Users.password FROM Users WHERE id = '" + user_id + "'";

        db.query(getPassword, function(err, result) {
            if (result) {
                res.status(200).json({ result })
            } else {
                console.log(err)
            }
        })
    }
}

exports.getCurrentUser = (req, res, next) => {
    if (req.method = "GET") {
        let user_id = req.params.user_id;
    
        let getCurrentUser = "SELECT Users.first_name, Users.last_name, Users.imageUser, Users.bannerUser FROM Users WHERE id = '" + user_id + "'";
    
        db.query(getCurrentUser, function(err, result) {
            if(result) {
                return res.json({ result })
            } else {
                return res.status(204).json({ message: "Aucun utilisateur trouvé !"})
            }
        })
    }
}

exports.getPostsOfCurrentUser = (req, res, next) => {
    if (req.method = "GET") {
        let user_id = req.params.id;

        let getPostsOfCurrentUser = "SELECT Posts.id, Posts.content, Posts.imageUrl, Posts.likes_number, Posts.dislikes_number, DATE_FORMAT(Posts.post_create, '%d %b. %y - %kh%i') AS post_create, Posts.user_id, Posts.comments_number, Users.first_name, Users.last_name, Users.imageUser \
        FROM Posts \
        INNER JOIN Users ON Posts.user_id = Users.id \
        WHERE user_id = '" + user_id + "' \
        ORDER BY post_create DESC"

        db.query(getPostsOfCurrentUser, function(err, result) {
            if (result.length > 0) {
                return res.status(200).json({ result })
            } else {
                return res.status(403).json({ message: "L'utilisateur n'a aucun post !" })
            }
        })
    }
}