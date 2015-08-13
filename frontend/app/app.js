var app = angular.module('app', ['ui.router']);

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
            controller: ''
        }).
        state('signup', {
            url: '/signup',
            templateUrl: 'view/signup.html',
            controller: 'SignupCtrl'
        })
    }
);