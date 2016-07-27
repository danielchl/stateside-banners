app.controller('MainController', ['$scope', '$http', function($scope,$http){
	
	$scope.brandsNav = "views/brandsNav.html"

	$scope.brands = {};

	$http.get('json/brands.json').success(function(data){
  	//codigo cuando es correcta la peticion
  		$scope.brands = data.brands;
  	})

}]);