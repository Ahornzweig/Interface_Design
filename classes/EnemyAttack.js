"use strict";
class EnemyAttack {
    constructor(_speed, game, enemy) {
        this.shot = document.createElement("div");
        this.core = document.getElementById("core");
        this.loop = true;
        this.score = false;
        this.del = () => {
            this.shot.remove();
            this.loop = false;
        };
        this.speed = { "x": _speed[0], "y": _speed[1] };
        this.shot.className = "enemy-shot";
        this.shot.style.left = enemy.offsetLeft + "px";
        this.shot.style.top = (enemy.offsetTop) + "px";
        this.shot.style.zIndex = "1";
        this.position = { "x": enemy.offsetLeft, "y": enemy.offsetTop };
        game.appendChild(this.shot);
        requestAnimationFrame(() => this.update());
        setTimeout(this.del, 6000);
    }
    hit() {
        let left = this.core.parentElement.offsetLeft;
        let top = this.core.parentElement.offsetTop;
        let width = this.core.offsetWidth;
        let height = this.core.offsetHeight;
        if (this.position.x < (left + width) && this.position.x > (left) && this.position.y > (top - height) && this.position.y < (top)) {
            let counter = this.core.parentNode.children[1].children.length;
            if (counter > 0) {
                this.core.parentNode.children[1].children[(counter - 1)].remove();
                this.score = true;
                let audio = document.getElementById("in");
                audio.loop = false;
                audio.currentTime = 0;
                audio.play();
            }
            else {
                document.getElementById("end").style.display = "block";
                document.getElementById("game").style.display = "none";
            }
        }
    }
    move() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.shot.style.left = this.position.x + "px";
        this.shot.style.top = this.position.y + "px";
    }
    update() {
        if (this.loop) {
            this.move();
            if (!this.score)
                this.hit();
            requestAnimationFrame(() => this.update());
        }
    }
}
//# sourceMappingURL=EnemyAttack.js.map