function CalcController($scope)
{
    $scope.qty = 1;
    $scope.cost = 10;
    
    $scope.calc = function () { return $scope.qty * $scope.cost };
}