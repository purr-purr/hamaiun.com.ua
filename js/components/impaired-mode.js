$(document).ready(function () {
	const body = $('#body');
	
	// Для людей с видами зрения
	$('#impaired-mode-btn').on('click', function () {
		if ($('#impaired-mode-btn__item').is(':checked')) {
			$('.impaired-mode').addClass('active');
		} else {
			$('.impaired-mode').removeClass('active');
		}
	});
	
	// Сбросить настройки
	$('.impaired-mode__accept-btn').on('click', function () {
		$('.impaired-mode').removeClass('active');
		$('#impaired-mode-btn__item, .impaired-mode__item input').prop('checked', false);
		$('#body').removeClass();
		$('#body').addClass("loaded");
		localStorage.clear();
	});
	
	$('.impaired-mode__item input').on('click', function () {
		// Themes
		if ($('#impaired-mode__input--black').is(':checked')) {
			var checkboxBlack = document.getElementById('impaired-mode__input--black');
			localStorage.setItem('impaired-mode__input--black', checkboxBlack.checked);
			localStorage.removeItem('impaired-mode__input--white');
			
			var darkThame = "dark-theme";
			body.addClass(darkThame);
			localStorage.setItem("whatIsThame", darkThame);
			
		} else {
			body.removeClass('dark-theme');
		}
		if ($('#impaired-mode__input--white').is(':checked')) {
			var checkboxWhite = document.getElementById('impaired-mode__input--white');
			localStorage.setItem('impaired-mode__input--white', checkboxWhite.checked);
			localStorage.removeItem('impaired-mode__input--black');
			
			var whiteThame = "white-theme";
			body.addClass(whiteThame);
			localStorage.setItem("whatIsThame", whiteThame);
		} else {
			body.removeClass('white-theme');
		}
		
		// Font Size
		if ($('#impaired-mode__input--a1').is(':checked')) {
			var checkboxA1 = document.getElementById('impaired-mode__input--a1');
			localStorage.setItem('impaired-mode__input--a1', checkboxA1.checked);
			localStorage.removeItem('impaired-mode__input--a2');
			localStorage.removeItem('impaired-mode__input--a3');
			localStorage.removeItem('whatIsFontSize');
			body.removeClass('font-size--a2');
			body.removeClass('font-size--a3');
		}
		if ($('#impaired-mode__input--a2').is(':checked')) {
			var checkboxA2 = document.getElementById('impaired-mode__input--a2');
			localStorage.setItem('impaired-mode__input--a2', checkboxA2.checked);
			localStorage.removeItem('impaired-mode__input--a1');
			localStorage.removeItem('impaired-mode__input--a3');
			localStorage.removeItem('whatIsFontSize');
			body.removeClass('font-size--a3');
			
			var fontSizeA2 = "font-size--a2";
			body.addClass(fontSizeA2);
			localStorage.setItem("whatIsFontSize", fontSizeA2);
		} else {
			body.removeClass(fontSizeA2);
		}
		if ($('#impaired-mode__input--a3').is(':checked')) {
			var checkboxA3 = document.getElementById('impaired-mode__input--a3');
			localStorage.setItem('impaired-mode__input--a3', checkboxA3.checked);
			localStorage.removeItem('impaired-mode__input--a1');
			localStorage.removeItem('impaired-mode__input--a2');
			localStorage.removeItem('whatIsFontSize');
			body.removeClass('font-size--a2');
			
			var fontSizeA3 = "font-size--a3";
			body.addClass(fontSizeA3);
			localStorage.setItem("whatIsFontSize", fontSizeA3);
		} else {
			body.removeClass(fontSizeA3);
		}
	});
	
	function load() {
		if (localStorage.getItem("whatIsThame") == 'white-theme') {
			getColorTheme = localStorage.whatIsThame;
			body.addClass(getColorTheme);
		}
		if (localStorage.getItem("whatIsThame") == 'dark-theme') {
			getColorTheme = localStorage.whatIsThame;
			body.addClass(getColorTheme);
		}
		
		if (localStorage.getItem("whatIsFontSize") == 'font-size--a2') {
			getFontSize = localStorage.whatIsFontSize;
			body.addClass(getFontSize);
		}
		if (localStorage.getItem("whatIsFontSize") == 'font-size--a3') {
			getFontSize = localStorage.whatIsFontSize;
			body.addClass(getFontSize);
		}
		
		// themes and fonts Icon
		var checkedBlack = JSON.parse(localStorage.getItem('impaired-mode__input--black'));
		var checkedWhite = JSON.parse(localStorage.getItem('impaired-mode__input--white'));
		var checkedA1 = JSON.parse(localStorage.getItem('impaired-mode__input--a1'));
		var checkedA2 = JSON.parse(localStorage.getItem('impaired-mode__input--a2'));
		var checkedA3 = JSON.parse(localStorage.getItem('impaired-mode__input--a3'));
		document.getElementById("impaired-mode__input--black").checked = checkedBlack;
		document.getElementById("impaired-mode__input--white").checked = checkedWhite;
		document.getElementById("impaired-mode__input--a1").checked = checkedA1;
		document.getElementById("impaired-mode__input--a2").checked = checkedA2;
		document.getElementById("impaired-mode__input--a3").checked = checkedA3;
	}
	
	load();
});