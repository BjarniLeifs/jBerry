app.controller("statisticController", ["$scope", "$location", function($scope, $location) {
$.jqplot('chartdiv',  [[34.53, 56.32, 25.1, 18.6]], {series:[{renderer:$.jqplot.BarRenderer}]});
$('a[href="#tab-content"]').on('shown', function(e) {
            if (plotX._drawCount === 0) {
                plotX.replot();
            }
});



}]);