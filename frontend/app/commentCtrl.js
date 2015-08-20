angular.module('app').controller('CommentCtrl', ['$scope', '$http', '$resource', 'CommentService', function ($scope, $http, $resource, CommentService) {

    $scope.comments = CommentService.query();
    $scope.commentData = {'comment': '', 'poster' : $scope.id};
    $scope.newComment = function () {
        var comment = new CommentService($scope.commentData);
        comment.$save();
        $scope.comments.push(comment);
    }
}]);