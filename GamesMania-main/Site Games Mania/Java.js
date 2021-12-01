mobile.onclik = function(){
    for(i=0;i<menu.lenght;i++){
        if(menu[i].style.display == 'inline'){
            menu[i].style.display = 'none'
        } else{
            menu[i].style.display = 'inline'
        }
    }
}