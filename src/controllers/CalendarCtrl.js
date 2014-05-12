app.controller("CalendarCtrl", ["$scope", "$location", function($scope, $location) {
  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        left: 'month basicWeek basicDay agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
     }
  };

  angular.element(document).ready(function () {
    //$('#calender').fullCalendar('option', 'height', $(document).height());
  });

}]);