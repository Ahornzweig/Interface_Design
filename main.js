let game;
let player;
let shots = [];
let left;
let right;

function main() {

    game = document.getElementById("game");
    left = document.getElementById("left");
    right = document.getElementById("right");
    player = document.getElementById("player");

    window.addEventListener('mousemove', function (e) {

        let left = (e.pageX - (player.offsetWidth / 2)) + "px";
        let top = e.pageY + "px";

        player.style.left = left;
        player.style.top = top;

    });

    document.addEventListener("click", shoot)

    setInterval(attackPlayer, 2000)
}

function attackPlayer() {
    new EnemyAttack([-5, -.3], game, right);
    new EnemyAttack([5, .1], game, left);
    new EnemyAttack([-5, -2], game, right);
    new EnemyAttack([4, -3], game, left);
    new EnemyAttack([-4, 2], game, right);
    new EnemyAttack([5, 1.5], game, left);
}

function shoot(event) {
    let shot = new Attack(event, game);

}

window.addEventListener("load", main);