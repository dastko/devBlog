angular.module('app').controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Login Controller initial...")
  
  $scope.loginSubmit = function () {
    $http.post('/api/auth/local', {
      identifier: $scope.email,
      password: $scope.password,
    })
      .then(function onSuccess() {
        console.log("What is wrong?!")
        window.location = '#/addpost';
      })
      .catch(function onError(err) {
        console.log(err);
      });
  }
}]);