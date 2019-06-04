$(window).on('load', function () {
	let show = true;

	$('.uxpa40-0').dblclick(function () {
		if (show) {
			$('.yg09x4-7').css('height', '40px');
			show = false;
		}
		else {
			$('.yg09x4-7').css('height', '30%');
			show = true;
		}
	});
});