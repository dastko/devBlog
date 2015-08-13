/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    postComment: function (req, res) {
        Comment.create({
            comment: req.param('comment'),
            poster: "55c49f2b2e8ce06d440040e8"
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
};