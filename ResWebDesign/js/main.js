
function stickyChange() {
    let scroll = window.scrollY;
    console.log(scroll);
    if(scroll>499){
        document.getElementById("header").classList="header-hidden";
    }else{
        document.getElementById("header").classList="";
    }
}

window.addEventListener("scroll", stickyChange)