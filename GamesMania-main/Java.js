var ham = document.getElementById('ham')
var menu = document.getElementsByClassName('aa')

ham.onclick = function (){
for(i=0;i<menu.length;i++){
    if(menu[i].style.display == 'inline'){
        menu[i].style.display = 'none'
    } else{
        menu[i].style.display = 'inline'
    }
}

}

Cookies.set('test', 'value');
Cookies.get('test') 
var cookieValue = $.cookie("test");

$.cookie("test", 1);

$.removeCookie("test");

$.cookie("test", 1, { expires : 10 });

$.cookie("test", 1, {
    expires : 10,           
    path    : '/',          
                           
 
    domain  : 'Games.com', 
                            
 
    secure  : true          
                            
                            
 });