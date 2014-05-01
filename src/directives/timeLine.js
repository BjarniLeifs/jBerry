app.directive('timeLine', ['$compile', function($compile) {
	var tmp = "<table>";

	function getTemplate(dObj) {
		var hours;

		for(var i = dObj.hour-2; i < dObj.hour+4; i++) {
			hours = (i > 9)?i+':00':'0'+i+':00';

			if(dObj.hour !== i)
				tmp += "<tr><td class='hours'>"+hours+"</td>";
			else
				tmp += "<tr><td class='hours now'>"+hours+"</td>";

			for(var j = 0; j <= 6; j++) {
				if(dObj.minutes !== j)
					tmp += "<td class='cell-minutes'><span  class='minutes'>"+j+"0</span></td>";
				else 
					tmp += "<td class='cell-minutes'><span class='minutes now'>"+j+"</span></td>";

			}
			tmp += "</tr>";
		}
		tmp += "</table>";

		return tmp;
	}

	return {
		restrict: 'E',
		replace: 'true',
		link: function(scope, elem, attrs) {
			var d = new Date(), h = d.getHours(), m = d.getMinutes(); 

			elem.html(getTemplate({hour: h, minute:m, period:(h > 12)?'PM':'AM'}));
			$compile(elem.contents());

			$('tr').hover(function() {
				$(this).find('.cell-minutes').slideDown('fast', function() {});
			}, function() {
				$(this).find('.cell-minutes').slideUp('fast', function() {});
			});
			elem.bind('mouseover', function() {
				elem.css('cursor', 'pointer');
			});
		}
	};
}]);