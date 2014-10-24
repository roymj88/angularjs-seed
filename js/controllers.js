(function () {

	//Main Controller
	function mainController($scope){
	    $scope.pageClass = 'page-home';
	}

	//About Controller
	function aboutController($scope){
	    $scope.pageClass = 'page-about';    
	}

	//Contact Controller
	function contactController($scope){
	    $scope.pageClass = 'page-contact';    
	}

	angular.module('myApp').controller('mainController', mainController);
	angular.module('myApp').controller('aboutController', aboutController);
	angular.module('myApp').controller('contactController', contactController);

})();