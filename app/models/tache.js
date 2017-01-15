angular.module("liste").service("Tache",
	["$http",
		function($http)
		{
			var Tache = function(data)
			{
				this.id = data.id;
				this.text = data.text;
				this.done = data.done;
				this.liste = data.list_id.$oid;
			}
			
			Tache.prototype.done = function()
			{
				/*$http.get("http://todos.api.netlor.fr/lists/" + this.liste + "/todos", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					response.data.forEach(function(data)
					{
						console.log(data);
					});
				},function(error)
				{
					console.log(error);
				});*/
			}
			
			Tache.prototype.modif = function()
			{
				/*$http.put("http://todos.api.netlor.fr/lists/" + this.id, '{"label": "' + document.getElementById("liste-" + this.id).value + '"}' ,{ headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					
				},function(error)
				{
					console.log(error);
				});
				
				this.label = document.getElementById("liste-" + this.id).value;*/
			}
			
			return Tache;
		}
]);