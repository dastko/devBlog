var app = angular.module('app', ['ui.router', 'toastr', 'ngAnimate', 'compareTo', 'ui.bootstrap', 'ngResource']);

app.config(
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/posts');

        $stateProvider.
            state('login', {
                url: '/login',
                templateUrl: 'view/login.html',
                controller: 'LoginCtrl'
            }).
            state('posts', {
                url: '/posts',
                templateUrl: 'view/posts.html',
                controller: 'PostCtrl'
            }).
            state('signup', {
                url: '/posts',
                controller: 'SignupCtrl'
            }).
            state('addpost', {
                url: '/addpost',
                templateUrl: 'view/addpost.html',
                controller: 'PostCtrl'
            }).
            state('post', {
                url: '/post/:id',
                templateUrl: 'view/post.html',
                controller: function ($scope, $stateParams) {
                $scope.id = $stateParams.id;
                }
            })
    }
    );