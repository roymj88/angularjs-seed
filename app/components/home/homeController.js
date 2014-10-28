(function() {

	'use strict'
	
	function homeController() {
		this.title = "Home Page";
	}

	angular.module('myApp').controller('homeController', homeController);

})();