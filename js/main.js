window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}

$(function () {
	// layout
	$("#included__header").load("templates/header.html");
	$("#included__footer").load("templates/footer.html");
	// any
	$("#included__contact-block").load("templates/contact-block.html");
	$("#included__about-us").load("templates/about-us.html");
	$("#included__why-we").load("templates/why-we.html");
	$("#included__preloader").load("templates/preloader.html");
	$("#included__impaired-mode").load("templates/impaired-mode.html");
});

