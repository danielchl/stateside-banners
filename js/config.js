app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'bannerCtrl'
		})
		.when('/:code',{
			templateUrl: 'views/bannerView.html',
			controller: 'bannerCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});