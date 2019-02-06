angular.module('app')
    .factory('noteServices', 
        function($http) {

        	data = [
				{
					title:"Bienvenido",
					texto:"Puede editar este texto o crear una nueva",
					color:'orange'
				}
			];
			
			return {
				localNotas:[],
				notaActiva: function(key){
					return this.localNotas.findIndex(function(element) { 
						return element.$$hashKey == key; 
					  });
				},
				obtenerNotas: function (){
					if (!(window.localStorage['noteTestIncrease'])){
					return data;	
					}
					return JSON.parse(window.localStorage['noteTestIncrease']);
				},
				almacenarNotas: function(local){
					window.localStorage['noteTestIncrease'] = angular.toJson(local);
					this.localNotas = local;
				}


				/*obtenerProductos: function (parametro) {
					var url = '../dataJson/products' + parametro + '.json';
					var oPromise = $http.get(url).then(function (response) {
   
						return response.data;
					});
					return oPromise;
				}*/

			}; // fin return	
}) 
