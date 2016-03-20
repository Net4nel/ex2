var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/home', {
            templateUrl: '/home.html'
        })
        .when('/products', {
            templateUrl: '/products.html'
        })
        .when('/contacts', {
            templateUrl: '/contacts.html'
        })
        .otherwise({redirectTo: '/home'})
});