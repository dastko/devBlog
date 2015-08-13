/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        //relation with comment
        comments: {
            collection: 'comment',
            via: 'poster'
        },

        title: {
            type: 'string',
            required: true
        },
        content: {
            type: 'string',
            required: true,
        },
        subtitle: {
            type: 'string',
            required: true,
        },
        picture: {
            type: 'string'
        },
        useremail: {
            type: 'string',
            required: true
        }
    }
};