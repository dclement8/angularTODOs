angular.module("liste").service("Liste",
	["$http",
		function($http)
		{
			var Liste = function(data)
			{
				this.id = data.id;
				this.label = data.label;
				this.todos = [];
			}
			
			Liste.prototype.show = function()
			{
				$http.get("http://todos.api.netlor.fr/lists/" + this.id + "/todos", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					response.data.forEach(function(data)
					{
						
					});
				},function(error)
				{
					console.log(error);
				});
			}
			
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
			
			/*Liste.prototype.suppr = function()
			{
				$http.delete("http://todos.api.netlor.fr/lists/" + this.id ,{ headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					
				},function(error)
				{
					console.log(error);
				});
				
				$("#l-" + this.id).parent().remove();
			}*/
			
			return Liste;
		}
]);