angular.module('app').controller('PostCtrl', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {


    $scope.addPost = function () {
            $http.post('/api/addpost', {
                    title: $scope.title,
                    content: $scope.content,
                    subtitle: $scope.subtitle,
                    picture: $scope.picture,
                    useremail: $scope.useremail
                })
                .then(function onSuccess(response) {
                    toastr.success("Post Successfully added ", "Successfully added");
                })
                .catch(function onError(err) {
                    if (err.status == 404) {
                        console.log(err);
                    }
                    if (err.status == 403) {
                        console.log(err);

                    } else {
                        console.log(err);
                    }
                });
        },

        $http.get('api/post').then(function (response) {
            $scope.posts = response.data;
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
        },

        $scope.hidePost = function () {
            $scope.showP = false;
            $scope.picture = 'img/home-bg.jpg';
        },

        $scope.getUser = function () {
            $http.get('/api/getuser')
                .then(function onSuccess(user) {
                    $scope.useremail = user.data.email;
                })
                .catch(function onError(err) {
                    console.log(err);
                });
        }
}])