"use strict";
class EnemyAttack {
    constructor(_speed, game, enemy) {
        this.shot = document.createElement("div");
        this.loop = true;
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
    move() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.shot.style.left = this.position.x + "px";
        this.shot.style.top = this.position.y + "px";
    }
    update() {
        if (this.loop) {
            this.move();
            requestAnimationFrame(() => this.update());
        }
    }
}
//# sourceMappingURL=EnemyAttack.js.map