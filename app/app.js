var app = angular.module('employeeManagementApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/employees', {
            templateUrl: 'app/view/employee-list.html', // Chemin correct vers le fichier
            controller: 'EmployeeController',
        })
        .when('/employees/add', {
            templateUrl: 'app/view/add-employee.html',
            controller: 'EmployeeController',
        })
        .when('/employees/edit/:id', {
            templateUrl: 'app/view/edit-employee.html',
            controller: 'EmployeeController',
        })
        .otherwise({
            redirectTo: '/employees',
        });
}]);
