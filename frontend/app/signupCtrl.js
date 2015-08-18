angular.module('app').controller('SignupCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.signupForm = {
            loading: false
        },

        $scope.submitSignupForm = function () {
            $scope.signupForm.loading = true;

            $http.post('/api/user', {
                    name: $scope.signupForm.name,
                    email: $scope.signupForm.email,
                    password: $scope.signupForm.password

                })
                .then(function onSuccess(response) {
                    console.log(response);
                    window.location = '#/addpost';
                })
                .catch(function onError(err) {
                    if (err.status == 409) {}
                    if (err.status = 400 || 403 || 404) {}
                }).finally(function eitherWay() {
                    $scope.signupForm.loading = false
                })
        }
}]);