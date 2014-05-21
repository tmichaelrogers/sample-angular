var myApp = angular.module('myApp',[])

myApp.controller('TaskController',['$scope','TaskService',function($scope, TaskService){
	$scope.TaskService = TaskService;

	$scope.addNew = function(){
		$scope.TaskService.addTask($scope.newTitle)
		$scope.newTitle='';
	}
}])

myApp.factory('TaskService', function() {
	var TaskService = {};

	TaskService.tasks = [
		{ title: "loaf of bread", status:false },
		{ title: "container of milk", status:true },
		{ title: "stick of butter", status:false }		
	]

	TaskService.addTask = function(title) {
		var newTask = { title : title, status: false }

		TaskService.tasks.push(newTask);
	}

	return TaskService;
})

/*
This directive allows us to pass a function in on an enter key to do what we want.
 */
myApp.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});