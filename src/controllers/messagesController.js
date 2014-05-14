app.controller('messagesController', ['$scope', "$location", "$http", "messagesFactory", 
	function($scope, $location, $http, messagesFactory){
		console.log("controller");
		$scope.tabs = [
			{
				name:	"All emails",
				url:	"templates/messages/allEmail.html"
			},
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
			}
		];

		$scope.message = {
			recID : "",
			title : "",
			message : ""
		};

		$scope.users = messagesFactory.getUsers();
		console.log(users);
		$scope.messages = messagesFactory.getMessages();

		$scope.sendMessage = function(){
			console.log("controller sendMessage");
			console.log($scope.message.recID);
			if(message.recID !== "" && message.title !== "" && message.message !== "") {
				messagesFactory.sendMessage(message);
			}
		};




	}]);
