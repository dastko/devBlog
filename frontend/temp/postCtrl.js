angular.module('app').controller('PostCtrl', ['$scope', '$http', '$rootScope', 'toastr', 'PostService', function ($scope,$rootScope, $http, toastr, PostService) {


    $scope.posts = PostService.query();
    
    $scope.postData = {};
    $scope.newPost = function () {
        var post = new PostService($scope.postData);
        post.$save();
        $scope.posts.push(post);
    },
    
	$scope.post = PostService.get({id: $scope.id});
}])	