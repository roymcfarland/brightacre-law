var appRouter = angular.module("appRouter", ["ngRoute"])

appRouter.config(function ($routeProvider, $locationProvider) {
	$routeProvider

		// route for homepage
		.when("/", {
			templateUrl: "../views/home.html",
			controller: "homeController",
			controllerAs: "homeCtrl"
		})

		// catch all route
		.otherwise({
			redirectTo: "/"
		})

	// Remove # for HTML5 browsers
	$locationProvider.html5Mode(true);

})