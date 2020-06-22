"use strict";
class Attack {
    constructor(_event, game) {
        this.target = document.getElementById("boss");
        this.shot = document.createElement("div");
        this.loop = true;
        this.score = false;
        this.speed = { "x": 0, "y": -10 };
        this.del = () => {
            this.shot.remove();
            this.loop = false;
        };
        this.shot.className = "player-shot";
        this.shot.style.left = _event.pageX + "px";
        this.shot.style.top = _event.pageY + "px";
        this.shot.style.zIndex = "1";
        this.position = { "x": _event.pageX, "y": _event.pageY };
        game.appendChild(this.shot);
        requestAnimationFrame(() => this.update());
        setTimeout(this.del, 5000);
    }
    hit() {
        let left = this.target.offsetLeft;
        let top = this.target.offsetTop;
        let width = this.target.offsetWidth;
        let height = this.target.offsetHeight;
        if (this.position.x < (left + width / 2) && this.position.x > (left - width / 2) && this.position.y > (top + height) && this.position.y < (top + 2 * height)) {
            this.target.style.width = (width - 40) + "px";
            this.target.style.backgroundColor = "rgb(99, 24, 46)";
            let that = this;
            setTimeout(function () { that.target.style.backgroundColor = "white"; }, 300);
            this.score = true;
            let audio = document.getElementById("between");
            audio.loop = false;
            audio.currentTime = 0;
            audio.play();
            if (width - 40 == 0) {
                alert("You won?");
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
//# sourceMappingURL=Attack.js.map