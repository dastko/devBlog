angular.module('app')
.factory('CommentService', function($resource) {
  return $resource('/api/comment/:id');
})

.factory('PostService', function($resource) {
  return $resource('/api/post/:id');
});
