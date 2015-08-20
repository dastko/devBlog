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

        $http.get('api/posts').then(function (response) {
            console.log(response.data.post);
            $scope.posts = response.data.post;
        }),
        
        $scope.id = {};
        
        function showId (post){
            $scope.showP = true;
            $scope.title = post.title;
            $scope.content = post.content;
            $scope.subtitle = post.subtitle;
            $scope.picture = 'img/post-bg.jpg';
            $scope.useremail = post.useremail;
            $scope.createdAt = post.createdAt;
            $scope.id = post.id;
        }
        
        $scope.showId = showId;

        $scope.hidePost = function () {
            $scope.showP = false;
            $scope.picture = 'img/home-bg.jpg';
        }
}])