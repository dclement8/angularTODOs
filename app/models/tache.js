angular.module("liste").service("Tache",
	["$http",
		function($http)
		{
			var Tache = function(data)
			{
				this.id = data.id;
				this.text = data.text;
				this.fini = data.done;
				this.liste = data.list_id.$oid;
			}
			
			Tache.prototype.done = function()
			{
				if(this.fini == false)
				{
					$http.put("http://todos.api.netlor.fr/lists/" + this.liste + "/todos/" + this.id + "/done", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
					{
						this.fini = true;
					},function(error)
					{
						console.log(error);
					});
				}
				else
				{
					$http.put("http://todos.api.netlor.fr/lists/" + this.liste + "/todos/" + this.id + "/undone", { headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
					{
						this.fini = false;
					},function(error)
					{
						console.log(error);
					});
				}
			}
			
			Tache.prototype.modifTask = function()
			{
				$http.put("http://todos.api.netlor.fr/lists/" + this.liste + "/todos/" + this.id , '{"text": "' + document.getElementById("tache-" + this.id).value + '"}' ,{ headers : {'Authorization' : 'Token token=0cbd83dabea346dab268bf13ce476ae1'} }).then(function(response)
				{
					console.log(response);
				},function(error)
				{
					console.log(error);
				});
				
				this.text = document.getElementById("tache-" + this.id).value;
			}
			
			return Tache;
		}
]);