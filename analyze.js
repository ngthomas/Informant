var analyze = function(hyperfeed_jquery_obj){
  var title_div = $(hyperfeed_jquery_obj).find('.mbs._6m6._2cnj._5s6c')
  var desc_div = $(hyperfeed_jquery_obj).find('._6m7._3bt9')
  var outlet_div = $(hyperfeed_jquery_obj).find('._6lz._6mb.ellipsis')

  if (desc_div.length + title_div.length + outlet_div.length == 3) {
    console.log(title_div.text());
    console.log(desc_div.text());
    console.log(outlet_div.text().split(/\|.+/)[0])
    
    // Check spelling
    var spelling_score = 0 
    $(title_div.text().match(/\w+/g)).each(function() {
      if (!this.match(/.+[A-Z\'\-\!\:].+/)) spelling_score += !dictionary.check(this);
    })
    $(desc_div.text().match(/\w+/g)).each(function() {
      if (!this.match(/.+[A-Z\'\-\!\:].+/)) spelling_score += !dictionary.check(this);
    })

  } else {
    return {};
  }

  
};