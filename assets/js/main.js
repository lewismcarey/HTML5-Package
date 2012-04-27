$(function() {
	/* EXTERNAL LINKS -------------------------------------------------------- */
	$("a[rel='external']").addClass("external").attr('title', function() { return this.title + ' (Opens in New Window)' }).click(function() { window.open(this.href); return false; });
});