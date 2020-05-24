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
        setTimeout(this.del, 5000);
    }
    hit() {
        let left = this.core.parentElement.offsetLeft;
        let top = this.core.parentElement.offsetTop;
        let width = this.core.offsetWidth;
        let height = this.core.offsetHeight;
        if (this.position.x < (left + width) && this.position.x > (left) && this.position.y > (top - height / 2) && this.position.y < (top + height / 2)) {
            let counter = this.core.parentNode.children.length;
            if (counter > 1) {
                this.core.parentNode.children[(counter - 1)].remove();
                this.score = true;
                console.log(this.core.parentNode.children);
            }
            else {
                alert("game over");
                location.reload();
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