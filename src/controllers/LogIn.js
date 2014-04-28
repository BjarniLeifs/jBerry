app.controller("MainController", ["$scope", "$location", "$timeout", "UserService", "EvaluationsService", "HtmlService", function($scope, $location, $timeout, UserService, EvaluationsService, HtmlService) {
	$scope.user = UserService.getUser();
	$scope.checked = [];
	$scope.template = "";
	$scope.results = "";

	EvaluationsService.getData().then(function(respond) {
		if(respond[0].status == 200 && respond[1].status == 200 && respond[2].status == 200) {
			$scope.userStruct = EvaluationsService.setStruct(respond[0].data, respond[1].data, respond[2].data);
		}
	});
	
	$scope.isAdmin = function(){
		return UserService.isAdmin();
	};
	
	$scope.goBuild = function () {
		$location.path("/builder");
	};
	
	$scope.templateExists = function() {
		return $scope.template !== "";
	};
	
	$scope.resultExists = function() {
		return $scope.results !== "";
	};
	
	$scope.submitEval = function() {
	
		EvaluationsService.saveForm($scope.template.course, $scope.template.ID, $scope.evaluationResults).then(function(respond) {
			if(respond.status == 200) {
				$scope.template = "";
			} else {
				console.log("Error on submit");
			}
		});
	};
	
	$scope.updateMultiAns = function(id, weight, text) {
		var arr = $scope.checked[id];
		
		if(arr === undefined) {//First input
			$scope.checked[id] = [];
			arr = [];
		}
					
		var selected = arr.indexOf(text);
		var value = (($scope.evaluationResults[id-1].Value === "") ? 0 : parseInt($scope.evaluationResults[id-1].Value));
		
		//Is selected
		if(selected > -1) {
			$scope.checked[id].splice(selected, 1);
			$scope.evaluationResults[id-1].Value = (value - parseInt(weight)).toString();
		} else { //Not selected
			$scope.checked[id].push(text);
			$scope.evaluationResults[id-1].Value = (value + parseInt(weight)).toString();
		}
		
	};
	
	$scope.loadEvaluation = function (id, course, semester) {
		$scope.evaluationResults = [];
		
		EvaluationsService.getTeachers(id, course, semester).then(function(respond) {
			if(respond.status == 200) {
				$scope.teacher = respond.data[0]; //For our set up we only need one teacher	
	
				EvaluationsService.getFormbyId(id).then(function(respond) {
					if(respond.status == 200) {
						$scope.template = respond.data;
						$scope.template.course = course;
						$scope.template.ID = id;
						
						for(var i = 0; i < $scope.template.CourseQuestions.length; i++) {
							$scope.evaluationResults[$scope.template.CourseQuestions[i].ID] = {
								QuestionID: $scope.template.CourseQuestions[i].ID,
								TeacherSSN: $scope.teacher.SSN,
								Value: ""
							};
						}
						
						$scope.results = "";
					} else {
						console.log("Error getting template"); //TO DO: Handle error
					}	
				});
			}  else {
				console.log("Error getting teachers list"); //TO DO: Handle error
			}
		});

	};
	
	$scope.loadResult = function(evalID, courseID, semester) {
		EvaluationsService.getResults(evalID).then(function(respond) {
			if(respond.status == 200) {
				$scope.template = "";
				$scope.results = respond.data;
			} else {
				console.log("Error on Loading results");
			}
		});
	};
	
	$scope.setLan = function(lan) {
		$scope.isEN = (lan == 'EN');
	};
	
	$scope.percent = 65;
	
	$scope.options = {
		animate:{
			duration:0,
			enabled:false
		},
		barColor:'#2C3E50',
		scaleColor:false,
		lineWidth:55,
		lineCap:'circle'
	};
	
	$scope.getPresent = function(arr) {
		return 65;
	};
}]);