angular.module("liste")
	.controller("ListeController", ["$scope", "$http", "Liste",
	function($scope, $http, Product)
	{
		$http.get("http://todos.api.netlor.fr/lists", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
		{
			console.log(response);
			/*$scope.liste = [];
			response.data.forEach(function(data)
			{
				var newListe = new Liste(data);
				$scope.liste.push(newProduct);
			});*/
		},
		function(error)
		{
			console.log(error);
		});
	}
]);