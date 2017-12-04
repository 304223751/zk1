var ang = angular.module('app', []);
ang.controller('mm', ['$scope', '$http', function ($scope, $http) {
    $http({
        url: 'localhost:8080',
        method:'GET'
    }).then(function (result) {
        console.log($scope.data);
        $scope.data = result.data;
    }, function (err) {
        console.log(err);
    });
}]);