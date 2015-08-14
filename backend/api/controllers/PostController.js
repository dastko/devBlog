/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    post: function (req, res) {
        Post.create({
            title: req.param('title'),
            content: req.param('content'),
            subtitle: req.param('subtitle'),
            picture: req.param('picture'),
            useremail: req.param('useremail'),
        }, function postCreated(err, newPost) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }
            return res.json({
                id: newPost.id
            });
        })
    }
};