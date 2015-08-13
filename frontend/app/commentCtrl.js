angular.module('app').controller('CommentCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

    $scope.addComment = function () {

        $http.post('/api/addcomment', {
                comment: $scope.comment,
                poster: $rootScope.id
            })
            .then(function onSuccess(response) {
                window.location = '#/posts';
            })
            .catch(function onError(err) {
                if (err.status == 404) {
                    console.log("sdadasdsaads");
                }
                if (err.status == 403) {} else {}
            });
    }
}])