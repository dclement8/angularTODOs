angular.module("liste").service("Liste",
	["$http",
		function($http)
		{
			var Liste = function(data)
			{
				this.id = data.id;
				this.label = data.label;
			}
			
			return Liste;
		}
]);