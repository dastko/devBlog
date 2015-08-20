angular.module('app').controller('OnePostCtrl', ['$scope', '$rootScope', '$http', 'PostService', function($scope,$rootScope, $http, PostService){
 
  $scope.post = PostService.get({ id: $scope.id }, function() {
    console.log(PostService);
  }); 
}]);