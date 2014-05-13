app.controller("CalendarCtrl", ["$scope", "$location", function($scope, $location) {
  angular.element(document).ready(function () {
    $('#calender').fullCalendar({
      droppable: true,
      drop: function(date, allDay) {
        alert("Dropped on " + date + " with allDay=" + allDay);
      }
    });
    $( ".sublist li" ).draggable({ revert: true, helper: 'clone'});
  });

}]);