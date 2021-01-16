
function stickyChange() {
    let scroll = window.scrollY;
    //console.log(scroll);
    if(scroll>499){
        document.getElementById("header").classList="header-hidden";
    }else{
        document.getElementById("header").classList="";
    }
}

window.addEventListener("scroll", stickyChange)


var coll = document.getElementsByClassName("collaps-toggle");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.classList.contains('show') == true) {
      content.classList.remove('show');
    } else {
      content.classList.add('show');
    }
  });
}