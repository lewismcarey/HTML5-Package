$(function() {
	$("a[rel='external']").addClass("external").attr('title', function() { return this.title + ' (Opens in New Window)' }).click(function() { window.open(this.href); return false; });
	
	twitter_name = 'forepoint';
	if(twitter_name) {
		getTwitters('tweetContent', { 
			id: twitter_name,
			count: 1,
			enableLinks: true,
			ignoreReplies: false,
			clearContents: true,
			template: '<p>%text%</p>'
		});
	
	}
});