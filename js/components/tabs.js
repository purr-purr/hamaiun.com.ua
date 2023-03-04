const tabs = document.querySelectorAll('.tab');

const removeActiveClass = () => {
	document.querySelectorAll('.tab').forEach(tab => {
		tab.classList.remove('active');
	});
	
	document.querySelectorAll('.tab-content').forEach(tabContent => {
		tabContent.classList.remove('active');
	});
}

const getTabContentElement = (index) => {
	return document.querySelector(`[data-tab="${index}-content"]`);
}

const getTabHeadingElement = (index) => {
	return document.querySelector(`[data-tab="${index}"]`);
}

tabs.forEach(tab => {
	if (window.location.hash.length > 0) {
		const hash = window.location.hash.slice(1);
		removeActiveClass();
		getTabHeadingElement(hash).classList.add('active');
		getTabContentElement(hash).classList.add('active');
	}
	
	tab.addEventListener('click', () => {
		const tabId = tab.dataset.tab;
		removeActiveClass();
		tab.classList.add('active');
		getTabContentElement(tabId).classList.add('active');
	});
});