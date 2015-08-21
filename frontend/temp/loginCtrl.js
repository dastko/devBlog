angular.module('app').controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Login Controller initial...")
  
  $scope.loginSubmit = function () {
    $http.post('/api/login', {
      email: $scope.email,
      password: $scope.password,
    })
      .then(function onSuccess(response) {
        console.log(response)
      })
      .catch(function onError(err) {
        console.log(err);
      });
  }
}]);