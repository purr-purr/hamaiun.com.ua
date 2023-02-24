const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const tabId = tab.dataset.tab;
		const tabContent = document.querySelector(`[data-tab="${tabId}-content"]`);
		
		document.querySelectorAll('.tab').forEach(tab => {
			tab.classList.remove('active');
		});
		
		document.querySelectorAll('.tab-content').forEach(tabContent => {
			tabContent.classList.remove('active');
		});
		
		tab.classList.add('active');
		tabContent.classList.add('active');
	});
});