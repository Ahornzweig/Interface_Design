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

    window.addEventListener('mousemove', function (e) {

        let left = (e.pageX - (player.offsetWidth / 2)) + "px";
        let top = e.pageY + "px";

        player.style.left = left;
        player.style.top = top;

    });

    let button = document.getElementById("start-game");

    button.addEventListener("click", start)

}
let intLeft;

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.addEventListener("click", shoot);

    intLeft = setInterval(attackPlayer, 5000);
    setTimeout(function () { intRight = setInterval(attackPlayerRight, 5000);}, 1500);
 

    setTimeout(function () { phaseOne = true }, 10000);
    setTimeout(function () { phaseTwo = true }, 25000);
    setTimeout(function () { phaseThree = true }, 40000);

    window.requestAnimationFrame(update);

    setTimeout(function () { canAttack = true }, 4000);
    
    setTimeout(function () {
        document.querySelector('#core-charged').classList.add('change')

        let audio = document.getElementById("charge");
        audio.loop = false;
        audio.currentTime = 2.5;
        audio.volume = 0;
        audio.play(); 

        var vol = 0.05;
        var interval = 200;
        var fadein = setInterval(
            function () {
                if (vol < 0.90) {
                    vol += 0.10;
                    audio.volume = vol;
                }
                else {
                    vol += 0.05;
                    clearInterval(fadein);
                }
            }, interval);

    }, 50);

    let audio = document.getElementById("charge");
    audio.loop = false;
    audio.currentTime = 0;
    audio.play();
}

function attackPlayerRight() {

    let audio = document.getElementById("between-two");
    audio.loop = false;
    audio.currentTime = 0;
    audio.play();

    right.style.animation="attackAnim 2s";
    setTimeout(function () {right.style.animation="";}, 2000);
    
    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (5 - (-5))) + (-5)], game, right);

    new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);

    if (phaseOne) {

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
    }

    if (phaseTwo) {

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
    }

    if (phaseThree) {

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);

        new EnemyAttack([Math.floor(Math.random() * (-1 - (-5))) + (-5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, right);
    }
}

function attackPlayer() {

    let audio = document.getElementById("in-two");
    audio.loop = false;
    audio.currentTime = 0;
    audio.play();

    left.style.animation="attackAnimLeft 2s";
    setTimeout(function () {left.style.animation="";}, 2000);
    
    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (5 - (-5))) + (-5)], game, left);

    new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

    if (phaseOne) {

        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);
    }

    if (phaseTwo) {

        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);
    }

    if (phaseThree) {

        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

        new EnemyAttack([Math.floor(Math.random() * (5 - 1) + 5), Math.floor(Math.random() * (2 - (-5))) + (-5)], game, left);

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
            audio.currentTime = 2.5;
            audio.volume = 0;
            audio.play();

            var vol = 0.05;
            var interval = 200;
            var fadein = setInterval(
                function () {
                    if (vol < 0.90) {
                        vol += 0.10;
                        audio.volume = vol;
                    }
                    else {
                        vol += 0.05;
                        clearInterval(fadein);
                    }
                }, interval);

        }, 50);

        setTimeout(function () { canAttack = true }, 4050);
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