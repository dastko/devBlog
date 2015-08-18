// api/controllers/UserController.js

var _ = require('lodash');
var _super = require('sails-auth/api/controllers/UserController');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
  
  
    getuser: function (req, res) {
        console.log('Running getUser');

        User.findOne({
            id: req.session.me
        }, function (err, user) {
            if (err) {
                res.negotiate(err);
            }
            return res.send(user);
        })
    }
 
});
