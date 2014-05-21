var myApp = angular.module("myApp", []);

myApp.controller('IsolateController',['$scope', function($scope) {
	$scope.name = "R2-D2";
}])

myApp.directive("droid", function ()
{
	return {
		restrict: "E",
		template: "<div>Droid Name: {{name}}</div><div><input type=\"text\" ng-model=\"name\"></div>",
		scope: { name:"=" }
	}
})
