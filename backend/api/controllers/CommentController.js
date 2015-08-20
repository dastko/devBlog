/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    postComment: function (req, res) {
        Comment.create({
            comment: req.comment,
            poster: "55d34003d402034456b854f9"
        }, function commentCreated(err, newComment) {
            if (err) {
                console.log('Error: ' + err);
                return res.negotiate(err);
            }
            return res.json({
                id: newComment.id
            });
        })
    },
     retrieveComments: function (req, res) {
        Comment.find().paginate({ page: 1, limit: 10 })
            .exec(function (err, comments) {
                if (err) {
                    return res.negotiate(err);
                }
                return res.json({comments : comments })
            });

    }
};