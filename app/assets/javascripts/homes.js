$(document).ready(function () {
	$('#test').click(function () {
		var light_id = $('input[name="light-id"]').val()
			, status = ($('input[name="chk-status"]:checked').length == 1)
			, sat = $('input[name="range-sat"]').val()
			, bri = $('input[name="range-bri"]').val()
			, hue = $('input[name="range-hue"]').val();

		$.ajax({
		  type: 'get',
		  url: '/test',
		  data: 'id=' + light_id + '&status=' + status + '&sat=' + sat + '&bri=' + bri + '&hue=' + hue,
		  success: function (data, textStatus, jqXHR) {
		  },
		});

		// var datas = {
		// 	on: ($('input[name="status"]:checked').val() == 'true'),
		// }

		// $.ajax({
		//   type: 'put',
		//   url: 'http://192.168.0.101/api/zoG5NHui7WTIgaJQUkEDl51Rl1xTqYHhyy8wtKVV/lights/1/state',
		//	 contentType: 'application/json',
		//   data: JSON.stringify(datas),
		//   success: function (data, textStatus, jqXHR) {
		//   	// $('#result').text(data);
		//   	console.log(data);
		//   },
		// });
	});

	$('.slider-bar').on('input', function () {
		var value_element = '#' + $(this).attr('id') + '-value';
		$(value_element).text($(this).val());
	});

	$('#chk-status').change(function () {
		if (this.checked) {
			$('.slider-bar').attr('disabled', false);
			$('.range-value').removeClass('disabled');
		} else {
			$('.slider-bar').attr('disabled', true);
			$('.range-value').addClass('disabled');
		}
	});
});