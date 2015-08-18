angular.module('app').controller('SignupCtrl', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

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
                window.location = '#/posts';
            })
            .catch(function onError(err) {
                if (err.status == 409) {
                    toastr.error('Your credentials are invalid', 'Error');
                    return;
                }
                if (err.status = 400 || 403 || 404) {
                    toastr.error('Your credentials are invalid', 'Error');
                    return;
                }
            }).finally(function eitherWay() {
                $scope.signupForm.loading = false
            })
    }
}]);