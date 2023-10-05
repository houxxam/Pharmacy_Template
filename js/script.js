// Get the button:
let toTop = document.querySelector('.to-top');

window.onscroll = ()=>{
    if(document.documentElement.scrollTop < 20){
        toTop.setAttribute("style","display : none");
        
    }else{
        toTop.setAttribute("style","display : flex");
                
    }
}
toTop.onclick = ()=>{
    document.documentElement.scrollTop = 0;
}

