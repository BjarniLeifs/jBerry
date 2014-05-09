app.controller("statisticController", ["$scope", "$location", function($scope, $location) {

$(function () {
    $('.button-checkbox').each(function () {

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

}]);