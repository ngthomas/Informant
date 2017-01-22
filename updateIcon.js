

						

var UpdateIcons = function(x, grammerScore, labels, poliScore, nation) {
console.log(x);
    var storyId = $(x).attr("id");
    if (storyId == undefined) {
        storyId == Math.random();
    }
    console.log(storyId);

var speedID = [storyId, "canvas"].join("");
console.log(speedID);
    
    

var gaugeOpts = {
  lines: 12, // The number of lines to draw
  angle: 0, // The span of the gauge arc
  lineWidth: 0.3, // The line thickness
  pointer: {
    length: 0.53, // The radius of the inner circle
    strokeWidth: 0.062, // The thickness
    color: '#ABB2B9' // Fill color
  },
  limitMax: false,     // If true, the pointer will not go past the end of the gauge
  colorStart: '#D98880',   // Colors
  colorStop: '#D6EAF8',    // just experiment with them
  strokeColor: '#E6B0AA',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true     // High resolution support
};


    if (grammerScore === undefined) {
          grammerScore = 0;
    }
    if (labels === undefined) {
          category = "Unidenitified";
    }
    if (poliScore === undefined) {
        gaugeOpts["colorStart"] ='#E0E0E0';
        gaugeOpts["colorStop"] ='#E0E0E0';
        gaugeOpts["strokeColor"] ='#E0E0E0';
        poliScore = -1; //cannot be zero..
    }
    if (nation == undefined) {
    	  nation = "us";
    }
    

var imgURL = chrome.extension.getURL("flags/4x3/us.svg");
console.log(imgURL);

    var format1_Avail =$(x).find("._42nr");
    console.log("42:",
                format1_Avail.length);
    
	$(x).find("._42nr").prepend(
	'<div class ="informant_space">',
	'<span class="flag-icon flag-icon-squared" style="background-image:url('+imgURL+')"></span>',
	'<span class="grammarScore">'+grammerScore+'</span>',
	'<span class="articleLabel">'+category+'</span>',
	'<canvas id="'+speedID+'" class="poliGauge"></canvas>',
	'</div>');
    
    // var format2_Avail =$(x).find("._ohe");
    //console.log("1d:",
      //          format2_Avail.length);
    
    if (format1_Avail.length == 0 || format1_Avail == undefined) {
        console.log("add stuff");
    $(":first", x).prepend(
                                '<div class ="informant_space">',
                                '<span class="flag-icon flag-icon-squared" style="background-image:url('+imgURL+')"></span>',
                                '<span class="grammarScore">'+grammerScore+'</span>',
                                '<span class="articleLabel">'+category+'</span>',
                                '<canvas id="'+speedID+'"  class="poliGauge"></canvas>',
                                '</div>');
    }
    
    
    //width="150" height="80" style="width=150px; height=80px"



var target = document.getElementById(speedID); // your canvas element
var gauge = new Gauge(target).setOptions(gaugeOpts); // create sexy gauge!
gauge.maxValue = 100; // set max gauge value
gauge.animationSpeed = 25; // set animation speed (32 is default value)
gauge.set(Number(poliScore)); // poliScore doesn't like to be zero; weird....



} 


