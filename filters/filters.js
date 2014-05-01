var filterApp = angular.module('filterApp',[]);


filterApp.filter('dollars', function()
{
	return function(num)
	{
		return '$' + num.toFixed(2);
	}
});