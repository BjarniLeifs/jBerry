app.controller("statisticController", ["$scope", "$location", function($scope, $location) {

$(function () {
    $('.button-checkbox').each(function () {

        $scope.data1 = [[3,7,9,1,4,6,8,2,5]];
        $scope.data2 = [[8,7,2,1,3,4,6,8,5]];
        $scope.data3 = [[9,8,7,6,5,4,3,2,1]];
        $scope.data4 = [[3,7,9,1,4,6,8,2,5]];
        $scope.data5 = [[8,8,8,8,0,8,8,8,8]];
        $scope.data6 = [[9,0,9,0,9,0,9,0,9]];

    $scope.chartOptions = { 
      seriesDefaults: {
        // Make this a pie chart.
        renderer: jQuery.jqplot.PieRenderer, 
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      }, 
      legend: { show:true, location: 'e' }
    };

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length === 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});
/*
$(document).ready(function(){
  var plot1 = $.jqplot ('chart1', [[3,7,9,1,4,6,8,2,5]]);
});
$(document).ready(function(){
  var plot1 = $.jqplot ('chart2', [[3,7,9,1,4,6,8,2,5]]);
});
$(document).ready(function(){
  var plot1 = $.jqplot ('chart3', [[3,7,9,1,4,6,8,2,5]]);
});
$(document).ready(function(){
  var plot1 = $.jqplot ('chart4', [[3,7,9,1,4,6,8,2,5]]);
});
$(document).ready(function(){
  var plot1 = $.jqplot ('chart5', [[3,7,9,1,4,6,8,2,5]]);
});
$(document).ready(function(){
  var plot1 = $.jqplot ('chart6', [[3,7,9,1,4,6,8,2,5]]);
});
*/
}]);