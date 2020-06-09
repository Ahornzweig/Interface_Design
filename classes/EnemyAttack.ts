class EnemyAttack {

    private shot: HTMLDivElement = document.createElement("div");
    private core: HTMLDivElement = <HTMLDivElement>document.getElementById("core");
    private loop: boolean = true;
    private score: boolean = false;
    private speed: any;
    private position: any;

    constructor(_speed: number[], game: HTMLDivElement, enemy: HTMLDivElement) {

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

    del = () => {
        this.shot.remove();
        this.loop = false;
    }

    private hit(): void {

        let left: number = this.core.parentElement.offsetLeft;
        let top: number = this.core.parentElement.offsetTop;
        let width: number = this.core.offsetWidth;
        let height: number = this.core.offsetHeight;
        if (this.position.x < (left + width) && this.position.x > (left) && this.position.y > (top - height / 2) && this.position.y < (top + height / 2)) {
            let counter: number = this.core.parentNode.children.length;
            if (counter > 1) {

                this.core.parentNode.children[(counter - 1)].remove();
                this.score = true;
               
            } else {
                alert("game over");
                location.reload();
            }
        }

    }

    private move(): void {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.shot.style.left = this.position.x + "px";
        this.shot.style.top = this.position.y + "px";
    }

    private update(): void {

        if (this.loop) {
            this.move();
            if (!this.score)
                this.hit();

            requestAnimationFrame(() => this.update());
        }
    }
}