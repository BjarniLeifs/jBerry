app.directive('uiCalendar', function () {
  var uiConfig = {
    height: $(document).height() * 0.9,
    editable: true,
    header: 
    {
        left: 'today prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    }
  };  
   //returns calendar     
   return {
      require: 'ngModel',
      restrict: 'A',
        link: function(scope, elm, attrs, $timeout) {
          var sources = scope.$eval(attrs.ngModel);
          var tracker = 0;
          /* returns the length of all source arrays plus the length of eventSource itself */
          var getSources = function () {
            var equalsTracker = scope.$eval(attrs.equalsTracker);
            tracker = 0;
            angular.forEach(sources,function(value,key){
              if(angular.isArray(value)){
                tracker += value.length;
              }
            });
             if(angular.isNumber(equalsTracker)){
              return tracker + sources.length + equalsTracker;
             }else{
              return tracker + sources.length;
            }
          };
          /* update the calendar with the correct options */
          function update() {
            //calendar object exposed on scope
            scope.calendar = elm.html('');
            var view = scope.calendar.fullCalendar('getView');
            if(view){
              view = view.name; //setting the default view to be whatever the current view is. This can be overwritten. 
            }
            /* If the calendar has options added then render them */
            var expression,
              options = {
                defaultView : view,
                eventSources: sources
              };
            if (attrs.uiCalendar) {
              expression = scope.$eval(attrs.uiCalendar);
            } else {
              expression = {};
            }
            angular.extend(options, uiConfig, expression);
            scope.calendar.fullCalendar(options);
          }
          update();
            /* watches all eventSources */
            scope.$watch(getSources, function( newVal, oldVal )
            {
              update();
            });
       }
  };
});