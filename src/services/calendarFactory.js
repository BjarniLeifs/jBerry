app.factory("calendarFactory", ["$location", "$http", function($location, $http) {
	
	return {
		setCalender: function(events) {
			return $http.post('http://localhost:3000/api/api/calender', {calender: events});
		},
		getCalender: function() {
			return $http.get('http://localhost:3000/api/api/calender');
		}
	}
}]);