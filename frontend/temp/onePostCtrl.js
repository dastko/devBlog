angular.module('app').controller('OnePostCtrl', ['$scope', 'toastr', 'PostService', function ($scope, toastr, PostService) {    

	$scope.post = PostService.get({id: $scope.id});
}])