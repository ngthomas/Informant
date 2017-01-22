var render = function(a){///STUBB
	if (a.hasOwnProperty('tag')){
		console.log(a.url);
		console.log(a.tag);
		console.log(a.score);
	}else{
		console.log('ignore' , a.url);
	}
	return;
}

var find_news = function(){
	
	$("div:regex(id, hyperfeed_story*)").each( function() {
		var attr = $(this).attr('MODIFIED') || false;
		if (!attr){
			var analysis = analyze(this);
			if (!jQuery.isEmptyObject(analysis)){
				render(analysis);
			}
		};
		$(this).attr('MODIFIED',true);
	});
}; 


var update_timer
$('#topnews_main_stream_408239535924329').bind("DOMSubtreeModified",function(){
	if (update_timer) clearTimeout(update_timer);
	update_timer = setTimeout(function() { find_news() }, 500);	
});
