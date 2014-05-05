app.directive('timeLine', ['$compile', function($compile) {
	var tmp = "<table>";

	function getTemplate(dObj) {
		var hour = dObj.hour - 2;

		for(var i = 0; i < 6; i++, hour++) {
			if(dObj.hour !== hour)
				tmp += "<tr><td class='hours'>"+getHour(hour)+"</td>";
			else
				tmp += "<tr><td class='hours now'>"+getHour(hour)+"</td>";

			for(var j = 0; j < 6; j++) {
				if(dObj.minutes !== j)
					tmp += "<td class='cell-minutes'><span  class='minutes'>"+getMinute(hour, j)+"</span></td>";
				else 
					tmp += "<td class='cell-minutes'><span class='minutes now'>"+getMinute(hour, j)+"</span></td>";

			}
			tmp += "</tr>";
		}
		tmp += "</table>";

		return tmp;
	}

	function getHour(hour) {
		hour = ((hour < 0)?hour + 24:hour);
		hour = ((hour >= 24)?hour - 24:hour);

		return (hour > 9)?hour+':00':'0'+hour+':00';
	}


	function getMinute(hour, minute) {
		hour = ((hour < 0)?hour + 24:hour);
		hour = ((hour >= 24)?hour - 24:hour);
		hour = (hour > 9)?hour+':':'0'+hour+':';

		return (minute > 9)?hour+minute:hour+minute+'0';
	}

	return {
		restrict: 'E',
		replace: 'true',
		link: function(scope, elem, attrs) {
			var d = new Date(), h = d.getHours(), m = d.getMinutes(); 

			elem.html(getTemplate({hour: h, minute:m, period:(h > 12)?'PM':'AM'}));
			$compile(elem.contents());

			$('tr').hover(function() {
				$(this).find('.cell-minutes').stop().slideDown('fast');
			}, function() {
				$(this).find('.cell-minutes').slideUp('fast');
			});

			elem.bind('mouseover', function() {
				elem.css('cursor', 'pointer');
			});
		}
	};
}]);