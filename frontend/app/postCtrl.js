angular.module('app').controller('PostCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('api/post').then(function (response) {
            $scope.posts = response.data;
            console.log(response.data);
        }),
        $scope.showPost = function (post) {
            $scope.showP = true;
            $scope.title = post.title;
            $scope.content = post.content;
            $scope.subtitle = post.subtitle;
            $scope.picture = 'img/post-bg.jpg';
            $scope.useremail = post.useremail;
            $scope.createdAt = post.createdAt;
            $scope.id = post.id;
            $rootScope.id = post.id;
        },
        $scope.hidePost = function () {
            $scope.showP = false;
            $scope.picture = 'img/home-bg.jpg';
        }
}])