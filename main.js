let game;
let player;
let shots = [];
let left;
let right;
let boss;

let phaseOne = false;
let phaseTwo = false;
let phaseThree = false;
let canAttack = false;

function main() {

    game = document.getElementById("game");
    left = document.getElementById("left");
    right = document.getElementById("right");
    player = document.getElementById("player");
    boss = document.getElementById("boss");

    console.log(boss.getBoundingClientRect(), boss.offsetLeft)

    window.addEventListener('mousemove', function (e) {

        let left = (e.pageX - (player.offsetWidth / 2)) + "px";
        let top = e.pageY + "px";

        player.style.left = left;
        player.style.top = top;

    });

    document.addEventListener("click", shoot);

    setInterval(attackPlayer, 2000);

    setTimeout(function () { phaseOne = true }, 10000);
    setTimeout(function () { phaseTwo = true }, 25000);
    setTimeout(function () { phaseThree = true }, 40000);

    window.requestAnimationFrame(update);

    setTimeout(function () { canAttack = true }, 5000);
    document.querySelector('#core-charged').classList.toggle('change');

    let audio = document.getElementById("charge");
    audio.loop = false;
    audio.currentTime = 0;
    audio.play();
}

function attackPlayer() {
    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (5 - (-5))) + (-5)], game, right);
    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (5 - (-5))) + (-5)], game, left);

    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

    if (phaseOne) {

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);
    }

    if (phaseTwo) {

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);
    }

    if (phaseThree) {

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);
    }
}

function shoot(event) {
    if (canAttack) {
        canAttack = false;
        document.querySelector('#core-charged').classList.remove('change');
        let shot = new Attack(event, game);

        setTimeout(function () {
            document.querySelector('#core-charged').classList.add('change')

            let audio = document.getElementById("charge");
            audio.loop = false;
            audio.currentTime = 0.1;
            audio.volume = 0;
            audio.play();

            var vol = 0.05;
            var interval = 200;
            var fadein = setInterval(
                function () {
                    if (vol < 0.95) {
                        vol += 0.10;
                        audio.volume = vol;
                    }
                    else {
                        vol += 0.05;
                        clearInterval(fadein);
                    }
                }, interval);

        }, 50);

        setTimeout(function () { canAttack = true }, 6050);
    }
}

let position = 10
let moveRight = false
function update() {

    if (moveRight) {
        position += 0.10;
        boss.style.left = (boss.getBoundingClientRect().x + boss.getBoundingClientRect().width / 2) + position + "px";
    }

    if (!moveRight) {
        position -= 0.10;
        boss.style.left = (boss.getBoundingClientRect().x + boss.getBoundingClientRect().width / 2) + position + "px";
    }

    if (position < -10) {
        moveRight = true;
    }

    if (position > 10) {
        moveRight = false;
    }

    window.requestAnimationFrame(update);

}

window.addEventListener("load", main);