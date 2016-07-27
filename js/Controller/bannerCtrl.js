app.controller('bannerCtrl', ['$scope','$http', '$routeParams', function ($scope,$http,$routeParams) {
	$scope.banners = {};

	var code = $routeParams.code;

	$http.get('json/brands.json').success(function(data){
		
		//$scope.banners = data.banners;

		for (var b = 0; b <= data.brands.length-1; b++) {

			for (var i = 0; i <= data.brands[b].banners.length-1; i++) {
				if (data.brands[b].banners[i].code == code) {
					$scope.banners = data.brands[b].banners[i];
				}
			}
		}

		


	});

	setTimeout(function() {
		 var bannerName = $("#bannerName");
		 bannerName.shuffleLetters();
	}, 20);



}]);