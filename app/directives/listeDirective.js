angular.module("liste")
	.directive("lister", [function() {
		return{
			restrict: "E",
			templateUrl: "app/templates/listesTemplate.html",
			link: function(scope, element, attrs)
			{
				scope.show = function()
				{
					scope.lister.show();
				},
				scope.modif = function()
				{
					scope.lister.modif();
				}
			}
		};
	}
]);