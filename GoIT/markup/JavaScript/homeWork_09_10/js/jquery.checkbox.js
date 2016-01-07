jQuery(document).ready(function(){
    jQuery(".niceCheckJs").mousedown(function(){changeCheck(jQuery(this));});
    jQuery(".niceCheckJs").each(function(){changeCheckStart(jQuery(this));});
});


function changeCheck(el){
    var el = el,
    input = el.find("input").eq(0);
    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");    
        input.attr("checked", true)
    } 
    else 
    {
        el.css("background-position","0 0");    
        input.attr("checked", false)
    }
    return true;
}
function changeCheckStart(el)
{
    var el = el,
    input = el.find("input").eq(0);
    if(input.attr("checked")){
        el.css("background-position","0 -17px");
    }
    return true;

}
