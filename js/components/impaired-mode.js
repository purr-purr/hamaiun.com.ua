(function () {
	const bodyElement = document.getElementById('body').classList;
	const impairedContainer = document.getElementById('impaired-mode');
	const impairedOpenBtnInner = document.getElementById('impaired-mode-btn__item');
	const impairedOpenBtn = document.getElementById('impaired-mode-btn');
	const impairedResetBtn = document.querySelector('.impaired-mode__reset-btn');
	const impairedResetElements = document.querySelectorAll('#impaired-mode-btn__item, .impaired-mode__item input');
	const impairedItemElements = document.querySelectorAll('.impaired-mode__item input');
	
	const openSettings = () => {
		if (impairedOpenBtnInner.checked) {
			impairedContainer.classList.add('active');
		} else {
			impairedContainer.classList.remove('active');
		}
	}
	
	const resetSettings = () => {
		impairedContainer.classList.remove('active');
		bodyElement.remove(...bodyElement);
		bodyElement.add("loaded");
		localStorage.clear();
		impairedResetElements.forEach(function (el) {
			el.checked = false;
		});
	}
	
	const themeHandle = (color) => {
		const checkboxElement = document.getElementById(color);
		
		if (checkboxElement.checked) {
			localStorage.setItem(color, checkboxElement.checked);
			localStorage.removeItem(`${color === 'dark' ? 'white' : 'dark'}`);
			bodyElement.add(color);
			localStorage.setItem("currentTheme", color);
		} else {
			bodyElement.remove(color);
		}
	}
	
	const fontSizeHandle = () => {
		let a1ElementChecked = document.getElementById('a1').checked;
		let a2ElementChecked = document.getElementById('a2').checked;
		let a3ElementChecked = document.getElementById('a3').checked;
		const fontSizeA2 = "a2";
		const fontSizeA3 = "a3";
		
		if (a1ElementChecked) {
			localStorage.setItem('a1', a1ElementChecked);
			localStorage.removeItem('a2');
			localStorage.removeItem('a3');
			localStorage.removeItem('currentFontSize');
			bodyElement.remove(fontSizeA2);
			bodyElement.remove(fontSizeA3);
		}
		
		if (a2ElementChecked) {
			localStorage.setItem('a2', a2ElementChecked);
			localStorage.removeItem('a1');
			localStorage.removeItem('a3');
			localStorage.removeItem('currentFontSize');
			localStorage.setItem("currentFontSize", fontSizeA2);
			bodyElement.remove(fontSizeA3);
			bodyElement.add(fontSizeA2);
			a3ElementChecked = false;
		} else {
			bodyElement.remove(fontSizeA2);
		}
		
		if (a3ElementChecked) {
			localStorage.setItem('a3', a3ElementChecked);
			localStorage.removeItem('a1');
			localStorage.removeItem('a2');
			localStorage.removeItem('currentFontSize');
			localStorage.setItem("currentFontSize", fontSizeA3);
			bodyElement.remove(fontSizeA2);
			bodyElement.add(fontSizeA3);
		} else {
			bodyElement.remove(fontSizeA3);
		}
	}
	
	const saveSettings = (type) => {
		const checkedElement = JSON.parse(localStorage.getItem(type));
		document.getElementById(type).checked = checkedElement;
		
		if (type === 'a2' || type === 'a3') {
			const getFontSize = localStorage.currentFontSize;
			const currentFontSize = localStorage.getItem("currentFontSize");
			currentFontSize === type && bodyElement.add(getFontSize);
		}
		
		if (type === 'dark' || type === 'white') {
			const getColorTheme = localStorage.currentTheme;
			const currentTheme = localStorage.getItem("currentTheme");
			currentTheme === type && bodyElement.add(getColorTheme);
		}
	}
	
	const changingSettings = () => {
		themeHandle('dark');
		themeHandle('white');
		fontSizeHandle();
	}
	
	impairedOpenBtn && impairedOpenBtn.addEventListener('click', openSettings);
	impairedResetBtn && impairedResetBtn.addEventListener('click', resetSettings);
	for (let i = 0; i < impairedItemElements.length; i++) {
		impairedItemElements[i].addEventListener('click', changingSettings);
	}
	
	saveSettings('dark');
	saveSettings('white');
	saveSettings('a1');
	saveSettings('a2');
	saveSettings('a3');
})();



