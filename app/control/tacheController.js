angular.module("liste")
	.controller("TacheController", ["$scope", "$http", "Tache", "Liste",
	function($scope, $http, Tache, Liste)
	{
		/*$scope.create = function() {
			$http.post("http://todos.api.netlor.fr/lists" , '{"label": "' + document.getElementById("liste-createbox").value + '"}', { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
			{
				var newListe = new Liste(response.data);
				$scope.tab.push(newListe);
				console.log($scope.tab);
				
			},function(error)
			{
				console.log(error);
			});
		};*/
		
		/*$scope.suppr = function() {
			$http.delete("http://todos.api.netlor.fr/lists/" + this.lister.id ,{ headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
			{
				
			},function(error)
			{
				console.log(error);
			});
			
			var indice = -1;
			for(var i = 0; i < $scope.tab.length; i++)
			{
				if($scope.tab[i] == this.lister)
				{
					indice = i;
				}
			}
			
			$scope.tab.splice(indice, 1);
		};*/
	}
]);