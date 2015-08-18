var app = angular.module('app', ['ui.router', 'toastr', 'ngAnimate', 'compareTo', 'ui.bootstrap']);

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
            url: '/signup',
            templateUrl: 'view/signup.html',
            controller: 'SignupCtrl'
        }).
        state('addpost', {
            url: '/addpost',
            templateUrl: 'view/addpost.html',
            controller: 'PostCtrl'
        })
    }
);