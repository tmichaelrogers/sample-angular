var myApp = angular.module("myApp", []);

myApp.directive("droid", function ()
{
	return {
		restrict: "E",
		template: "<div>Please name me</div>"
	}
})

myApp.directive("mousein", function ()
{
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			console.log("Mouse Entered:"+attrs.mousein)
			element.addClass(attrs.mousein)
		})
	}
})

myApp.directive("mouseout", function ()
{
	return function(scope, element, attrs) {
		element.bind("mouseleave", function() {
			console.log("Mouse Left")
			element.removeClass(attrs.mousein)
		})
	}
})