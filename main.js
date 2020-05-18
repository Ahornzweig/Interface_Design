let game;
let player;
let shots = [];

function main() {

    game = document.getElementById("game");
    player = document.getElementById("player");

    window.addEventListener('mousemove', function (e) {

        let left = (e.pageX - (player.offsetWidth / 2)) + "px";
        let top = e.pageY + "px";

        player.style.left = left;
        player.style.top = top;

    });

    document.addEventListener("click", shoot)
}

function shoot(event) {
    let shot = new Attack(event,game);
   
}

window.addEventListener("load", main);