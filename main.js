let game;
let player;
let shots = [];
let left;
let right;
let boss;

function main() {

    game = document.getElementById("game");
    left = document.getElementById("left");
    right = document.getElementById("right");
    player = document.getElementById("player");
    boss = document.getElementById("boss");

    console.log(boss.getBoundingClientRect(),boss.offsetLeft)

    window.addEventListener('mousemove', function (e) {

        let left = (e.pageX - (player.offsetWidth / 2)) + "px";
        let top = e.pageY + "px";

        player.style.left = left;
        player.style.top = top;

    });

    document.addEventListener("click", shoot)

    setInterval(attackPlayer, 2000)

    window.requestAnimationFrame(update);
}

function attackPlayer() {
    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (5 - (-5))) + (-5)], game, right);
    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (5 - (-5))) + (-5)], game, left);

    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);
}

function shoot(event) {
    let shot = new Attack(event, game);
}

let position = 20
let moveRight = false
function update() {

    if ( moveRight) {
        position += 0.25;
        boss.style.left = (boss.getBoundingClientRect().x + boss.getBoundingClientRect().width/2) + position+"px";
    }

    if (!moveRight) {
        position -= 0.25;
        boss.style.left = (boss.getBoundingClientRect().x + boss.getBoundingClientRect().width/2) + position+"px";
    }

    if (position < -20) {
        moveRight = true;
    }

    if (position > 20) {
        moveRight = false;
    }

    window.requestAnimationFrame(update);

}

window.addEventListener("load", main);