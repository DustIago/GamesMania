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


