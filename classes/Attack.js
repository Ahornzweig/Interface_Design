"use strict";
class Attack {
    constructor(_event, game) {
        this.shot = document.createElement("div");
        this.loop = true;
        this.del = () => {
            this.shot.remove();
            this.loop = false;
        };
        this.shot.className = "player-shot";
        this.shot.style.left = _event.pageX + "px";
        this.shot.style.top = _event.pageY + "px";
        game.appendChild(this.shot);
        requestAnimationFrame(() => this.update());
        setTimeout(this.del, 2000);
    }
    update() {
        console.log("test");
        if (this.loop) {
            requestAnimationFrame(() => this.update());
        }
    }
}
//# sourceMappingURL=Attack.js.map