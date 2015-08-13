var app = angular.module('app', ['ui.router']);

app.config(
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/posts');

        $stateProvider.
        state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'LoginCtrl'
        }).
        state('posts', {
            url: '/posts',
            templateUrl: 'posts.html',
            controller: ''
        })
    }
);