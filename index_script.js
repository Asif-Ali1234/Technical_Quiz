function changename(name){
    document.getElementById('language').innerHTML=name
    var butt=document.getElementById('exbtn')

    butt.style.opacity=1

    butt.href=name+"/index.html"
}
$(document).ready(function(){
    $('.enabled').tooltip({title: "Select!", animation: true,delay: {show: 400, hide: 500}});
    $('.disabled').tooltip({title: "Coming Soon Stay tuned !!!", animation: true,delay: {show: 400, hide: 500}}); 
    document.oncontextmenu=document.body.oncontextmenu=function(){return false}  
});