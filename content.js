var render = function(a){///STUBB	
	return;
}

var find_news = function(){
	$("div:regex(id, hyperfeed_story*)").each( function() {
		var attr = $(this).attr('MODIFIED') || false;
		
		if (!attr){
			var analysis = analyze(this);
			if (analysis){
				render(analysis);
				//$(this).find("._42nr").prepend('<div class ="informant_space">filler<span class="poliScoreContainer"></span></div>');
				UpdateIcons(this);
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
