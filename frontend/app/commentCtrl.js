angular.module('app').controller('CommentCtrl', ['$scope', '$http', '$resource', 'CommentService', function ($scope, $http, $resource, CommentService) {
    console.log("Comment Ctrl");

    $scope.comments = CommentService.query();
    $scope.commentData = {};
    $scope.newComment = function () {
        var comment = new CommentService($scope.commentData);
        comment.$save();
        $scope.comments.push(comment);
    }
}]);