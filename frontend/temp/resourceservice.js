angular.module('app')
.factory('CommentService', function($resource) {
  return $resource('/api/comment/:id');
});
