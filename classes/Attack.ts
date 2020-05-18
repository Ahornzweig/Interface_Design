class Attack {
    private shot: HTMLDivElement = document.createElement("div");
    private loop: boolean = true;

    constructor(_event: MouseEvent, game: HTMLDivElement) {

        this.shot.className = "player-shot";
        this.shot.style.left = _event.pageX + "px";
        this.shot.style.top = _event.pageY + "px";
        game.appendChild(this.shot);



        requestAnimationFrame(() => this.update());
        setTimeout(this.del, 2000);
    }


    del = () => {
        this.shot.remove();
        this.loop = false;
    }

    private update(): void {
        console.log("test");
        if (this.loop) {

            requestAnimationFrame(() => this.update());
        }
    }



}