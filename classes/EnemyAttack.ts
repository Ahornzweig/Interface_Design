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
        setTimeout(this.del, 6000);
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
        if (this.position.x < (left + width) && this.position.x > (left) && this.position.y > (top - height) && this.position.y < (top)) {
            let counter: number = this.core.parentNode.children[1].children.length;
            if (counter > 0) {

                let lifes: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.querySelectorAll(".live");

                this.core.parentNode.children[1].children[(counter - 1)].remove();

                console.log(lifes);
                for (let i: number = 0; i < lifes.length; i++) {

                    lifes[i].style.backgroundColor = "rgb(99, 24, 46)";
                }

                setTimeout(function (): void {
                    for (let i: number = 0; i < lifes.length; i++) {

                        lifes[i].style.backgroundColor = "#39B54A";
                    }
                }, 500);

                this.score = true;

                let audio: HTMLAudioElement = <HTMLAudioElement>document.getElementById("in");
                audio.loop = false;
                audio.currentTime = 0;
                audio.play();

            } else {
                document.getElementById("end").style.display = "block";
                document.getElementById("game").style.display = "none";

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