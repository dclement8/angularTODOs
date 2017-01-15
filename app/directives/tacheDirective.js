angular.module("liste")
	.directive("task", [function() {
		return{
			restrict: "E",
			templateUrl: "app/templates/tacheTemplate.html",
			link: function(scope, element, attrs)
			{
				scope.done = function()
				{
					scope.task.done();
				},
				scope.modif = function()
				{
					scope.task.modif();
				}
			}
		};
	}
]);