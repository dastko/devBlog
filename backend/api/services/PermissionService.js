// api/services/PermissionService.js

var _ = require('lodash');
var _super = require('sails-permissions/api/services/PermissionService');

function PermissionService () { }

PermissionService.prototype = Object.create(_super);
_.extend(PermissionService.prototype, {

  // Extend with custom logic here by adding additional fields and methods,
  // and/or overriding methods in the superclass.
  
 // Promise.all([PermissionService.grant({ role: ‘collaborator’, model: ‘Project’, action: ‘read’}),
  //            PermissionService.grant({ role: ‘collaborator’, model: ‘Project’, action: ‘create’}),
  //            PermissionService.grant({ role: ‘collaborator’, model: ‘Issue’, action: ‘read’}),
  //            PermissionService.grant({ role: ‘collaborator’, model: ‘Issue’, action: ‘create’}])         
  //       .spread(function (projectRead, projectCreate, issueRead, issueCreate) {
  //           sails.log(’new read Project permission’, projectRead);
  //           sails.log(’new create Project permission’, projectCreate);
  //           sails.log(’new read Issue permission’, issueRead);
  //           sails.log(’new create Issue permission’, issueCreate);                
  //       });
});

module.exports = new PermissionService();
