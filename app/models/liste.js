angular.module("liste").service("Liste",
	["$http",
		function($http)
		{
			var Liste = function(data)
			{
				this.id = data.id;
				this.label = data.label;
			}
			
			Liste.prototype.show = function()
			{
				$http.get("http://todos.api.netlor.fr/lists/" + this.id + "/todos", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					console.log(response);
				},function(error)
				{
					console.log(error);
				});
			}
			
			return Liste;
		}
]);