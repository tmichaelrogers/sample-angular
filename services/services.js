var myApp = angular.module('myApp', []);

myApp.service('Calculator', function()
{
	this.calc = function ( qty, cost ) 
	{
		 return qty * cost;
	}
});

function CalcController ($scope, Calculator)
{
	$scope.qty=0;
	$scope.cost=0;
	
	$scope.calc = function () { return Calculator.calc($scope.qty, $scope.cost)};
} 

