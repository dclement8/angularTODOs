angular.module("liste")
	.controller("ListeController", ["$scope", "$http", "Liste", "Tache",
	function($scope, $http, Liste, Tache)
	{
		$scope.tab = [];
		$scope.laListe = null;
		$scope.tabb = [];
		
		$http.get("http://todos.api.netlor.fr/lists", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
		{
			response.data.forEach(function(data)
			{
				var newListe = new Liste(data);
				$scope.tab.push(newListe);
			});
		},
		function(error)
		{
			console.log(error);
		});
		
		$scope.create = function() {
			$http.post("http://todos.api.netlor.fr/lists" , '{"label": "' + document.getElementById("liste-createbox").value + '"}', { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
			{
				var newListe = new Liste(response.data);
				$scope.tab.push(newListe);
				document.getElementById("liste-createbox").value = "";
			},function(error)
			{
				console.log(error);
			});
		};
		
		$scope.suppr = function() {
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
			
			$scope.laListe = null;
			$scope.tabb = [];
		};
		
		$scope.show = function() {
			var tasks = [];
				
			$scope.laListe = this.lister;
				
			$http.get("http://todos.api.netlor.fr/lists/" + this.lister.id  + "/todos", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
			{
				response.data.forEach(function(data)
				{
					var newTache = new Tache(data);
					tasks.push(newTache);
				});
				
				$scope.tabb = [];
				for(var i = 0; i < tasks.length; i++)
				{
					$scope.tabb.push(tasks[i]);
				}
				
			},function(error)
			{
				console.log(error);
			});
		};
		
		$scope.supprTask = function() {
			$http.delete("http://todos.api.netlor.fr/lists/" + this.task.liste + "/todos/" + this.task.id ,{ headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
			{
				
			},function(error)
			{
				console.log(error);
			});
			
			var indice = -1;
			for(var i = 0; i < $scope.tabb.length; i++)
			{
				if($scope.tabb[i] == this.task)
				{
					indice = i;
				}
			}
			
			$scope.tabb.splice(indice, 1);
		};
		
		$scope.createTask = function() {
			
			if($scope.laListe != null)
			{
				$http.post("http://todos.api.netlor.fr/lists/" + $scope.laListe.id + "/todos" , '{"text": "' + document.getElementById("tache-createbox").value + '"}', { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					var newTache = new Tache(response.data);
					$scope.tabb.push(newTache);
					document.getElementById("tache-createbox").value = "";
					
				},function(error)
				{
					console.log(error);
				});
			}
		};
	}
]);