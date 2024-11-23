app.controller('EmployeeController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    const API_URL = 'http://localhost:8080/employees';

    // Charger tous les employés
    $scope.employees = [];
    $http.get(API_URL)
        .then(function (response) {
       
            $scope.employees = response.data;
        })
        .catch(function (error) {
            console.error('Error fetching employees:', error);
        });

    // Ajouter un employé
    $scope.newEmployee = {};
    $scope.addEmployee = function () {
        $http.post(API_URL, $scope.newEmployee)
            .then(function () {
                alert('Employee added successfully!');
                $location.path('/employees');
            })
            .catch(function (error) {
                console.error('Error adding employee:', error);
            });
    };

    // Supprimer un employé
    $scope.deleteEmployee = function (id) {
        $http.delete(`${API_URL}/${id}`)
            .then(function () {
                $scope.employees = $scope.employees.filter(emp => emp.id !== id);
                alert('Employee deleted successfully!');
            })
            .catch(function (error) {
                console.error('Error deleting employee:', error);
            });
    };

    // Récupérer un employé pour modification
    $scope.editEmployeeData = {};
    if ($routeParams.id) {
        $http.get(`${API_URL}/${$routeParams.id}`)
            .then(function (response) {
                $scope.editEmployeeData = response.data;
            })
            .catch(function (error) {
                console.error('Error fetching employee:', error);
            });
    }

    // Mettre à jour un employé
    $scope.updateEmployee = function () {
        $http.put(`${API_URL}/${$scope.editEmployeeData.id}`, $scope.editEmployeeData)
            .then(function () {
                alert('Employee updated successfully!');
                $location.path('/employees');
            })
            .catch(function (error) {
                console.error('Error updating employee:', error);
            });
    };
}]);
