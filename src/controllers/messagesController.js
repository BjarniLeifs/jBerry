app.controller('messagesController', ['$scope', "$location", "$http", "messagesFactory", 
	function($scope, $location, $http, messagesFactory){
		console.log("controller");
		$scope.tabs = [
		{
			name:	"Inbox",
			url:	"templates/messages/inbox.html",
			active: true
			
		},
		{
			name:	"Sent",
			url:	"templates/messages/sent.html"
		},
		{
			name:	"Trash",
			url:	"templates/messages/trash.html"
		
		},
		{
			name:	"All emails",
			url:	"templates/messages/allEmail.html"
			
		}
		];





	}]);
