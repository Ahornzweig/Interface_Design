class Attack {
    private target: HTMLDivElement = <HTMLDivElement>document.getElementById("boss");
    private shot: HTMLDivElement = document.createElement("div");
    private loop: boolean = true;
    private score: boolean = false;
    private speed: any = { "x": 0, "y": -10 };
    private position: any;

    constructor(_event: MouseEvent, game: HTMLDivElement) {

        this.shot.className = "player-shot";
        this.shot.style.left = _event.pageX + "px";
        this.shot.style.top = _event.pageY + "px";
        this.shot.style.zIndex = "1";
        this.position = { "x": _event.pageX, "y": _event.pageY };
        game.appendChild(this.shot);

        requestAnimationFrame(() => this.update());
        setTimeout(this.del, 5000);
    }

    del = () => {
        this.shot.remove();
        this.loop = false;
    }

    private hit(): void {

        let left: number = this.target.offsetLeft;
        let top: number = this.target.offsetTop;
        let width: number = this.target.offsetWidth;
        let height: number = this.target.offsetHeight;
        if (this.position.x < (left + width / 2) && this.position.x > (left - width / 2) && this.position.y > (top + height) && this.position.y < (top + 2 * height)) {

            this.target.style.width = (width - 40) + "px";
            this.target.style.backgroundColor = "rgb(99, 24, 46)";
            let that: Attack = this;
            setTimeout(function (): void { that.target.style.backgroundColor = "white"; }, 300);
            this.score = true;

            if (width - 40 == 0) {
                alert("You won?");
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