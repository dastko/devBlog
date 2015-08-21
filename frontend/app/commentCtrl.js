angular.module('app').controller('CommentCtrl', ['$scope', '$http', '$resource', 'CommentService', function ($scope, $http, $resource, CommentService) {

    $scope.post.comments = CommentService.query();
    $scope.commentData = {'comment': '', 'owner' : $scope.id};
    $scope.newComment = function () {
        var comment = new CommentService($scope.commentData);
        comment.$save();
        $scope.post.comments.push(comment);
    }
}]);