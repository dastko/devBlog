angular.module('app').controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.loginSubmit = function () {
        $http.post('/login', {
                email: $scope.email,
                password: $scope.password,
            })
            .then(function onSuccess() {
                window.location = '#/addpost';
            })
            .catch(function onError(err) {

            });
    }
}]);