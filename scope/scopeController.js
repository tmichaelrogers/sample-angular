var myApp = angular.module('myApp',[]);

function ScopeController($scope)
{
    $scope.calc = function () { return $scope.qty * $scope.cost };
}