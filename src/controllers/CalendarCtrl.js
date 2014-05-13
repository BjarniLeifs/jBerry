app.controller("CalendarCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.events = [];
  $scope.eventSource = {};

  $scope.list = {
    Food: [
      {name: 'Sandwich'}
    ],
    Recipes: [
      {name: 'French Chocolate Cake'}
    ],
    Activities: [
      {name: 'Cycling'}
    ]
  }

  $scope.calendarConfig = {
    height: $(document).height() * 0.9,
    editable: true,
    header: {
      left: 'today prev,next',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    droppable: "*",
      drop: function(date, allDay, jsEvent, ui) {
        $scope.$apply(function () {
          $scope.events.push({
            title: ui.helper[0].innerHTML,
            start: date,
            end: date,
            className: [ui.helper[0].type]
          });
        });
    }
  };

  $scope.getWidth = function() {
    return ($(document).width() - ((($(document).width() * 0.1666666667) * 2 )- 20));
  };

  angular.element(document).ready(function () {
    //Refresh Calender after animation
    setTimeout(function() {  $('#calender').fullCalendar('refresh'); }, 2000);
  });

  $scope.claendarWraper = {width: $scope.getWidth()};
  $scope.eventSources = [$scope.events];
}]);