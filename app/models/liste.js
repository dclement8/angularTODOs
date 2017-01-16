angular.module("liste").service("Liste",
	["$http", "Tache", 
		function($http, Tache)
		{
			var Liste = function(data)
			{
				this.id = data.id;
				this.label = data.label;
				this.todos = [];
			}
			
			/*Liste.prototype.show = function()
			{
				var tasks = [];
				
				$http.get("http://todos.api.netlor.fr/lists/" + this.id + "/todos", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					response.data.forEach(function(data)
					{
						var newTache = new Tache(data);
						tasks.push(newTache);
					});
					
					listeTodos = tasks;
					
				},function(error)
				{
					console.log(error);
				});
			}*/
			
			Liste.prototype.modif = function()
			{
				$http.put("http://todos.api.netlor.fr/lists/" + this.id, '{"label": "' + document.getElementById("liste-" + this.id).value + '"}' ,{ headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					
				},function(error)
				{
					console.log(error);
				});
				
				this.label = document.getElementById("liste-" + this.id).value;
			}
			
			return Liste;
		}
]);