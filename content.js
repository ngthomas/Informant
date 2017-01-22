//http://stackoverflow.com/questions/13771328/jquery-only-run-the-callback-function-once-after-all-the-event-changes
jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}


var find_news = function(){
	$("div:regex(id, hyperfeed_story*)").each( function() {
		var attr = $(this).attr('MODIFIED') || false;
		if (!attr){
			console.log(   this    );
			//STUBB ANALYZE(this);
			//STUBB ADD ANALYSIS
		};
		$(this).attr('MODIFIED',true)
	});
}; 


var update_timer
$('#topnews_main_stream_408239535924329').bind("DOMSubtreeModified",function(){
	if (update_timer) clearTimeout(update_timer);
	update_timer = setTimeout(function() { find_news() }, 500);	
});