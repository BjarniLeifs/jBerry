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
  };

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
          title: ui.helper[0].innerText,
          start: date,
          end: date,
          className: [ui.helper[0].attributes[0].value]
        });
      });
    },
    dayClick: function(date, allDay, jsEvent, view) {
      if(allDay) {
        if($(jsEvent.target).is('.fc-day')) {
          $scope.planner.fullCalendar('changeView', 'agendaDay').fullCalendar('gotoDate', date.getFullYear(), date.getMonth(), date.getDate());
        }
      }
    },
    eventRender: function(event, element) {
      element.bind('dblclick', function(event) {
        var name = this.childNodes[0].innerText;
        
        for(var i = 0; i < $scope.events.length; i++) {
          if($scope.events[i].title === name) {
            //Remove Event
            $scope.events.splice(i,1);
            break;
          }
        }
        $scope.$apply();
      });
    }
  };

  $scope.listRemove = function(index, type) {
    $scope.list[type].splice(index,1);
  };

  //Get Calander Width
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