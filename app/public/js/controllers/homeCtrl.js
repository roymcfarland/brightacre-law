var homeCtrl = angular.module("homeCtrl", []);

homeCtrl.controller("homeController", function() {

	var vm = this;

	vm.testMessage = "Welcome, you've arrived.";

});