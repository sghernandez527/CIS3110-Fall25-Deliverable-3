angular.module('jhEventApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .when('/inventory', {
            templateUrl: 'views/inventory.html',
            controller: 'InventoryController',
            controllerAs: 'invCtrl'
        })
        .when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'CartController',
            controllerAs: 'cartCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);