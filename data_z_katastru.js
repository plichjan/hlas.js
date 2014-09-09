var x = ""; 
$(".vlastnici").find("td").not(".partnerSJM").parent().each(function(i) {
  x +='<vlastnik id="v'+(i+1)+'" jmeno="'+$(this).children().first().text().split(",")[0]+'" podil="'+$(this).children().last().text()+'" ucast="true" />\n';
});
'\n<?xml version="1.0"?>\n<hlasovani><vlastnici>\n' + x + '</vlastnici><otazky /></hlasovani>\n'
