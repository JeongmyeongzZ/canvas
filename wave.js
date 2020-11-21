import {Point} from "./point.js";

export class Wave {
    constructor() {
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.clientX = this.stageWidth / 2;
        this.clientY = this.stageHeight / 2;

        this.init();
    }

    init() {
        this.point = new Point(this.clientX, this.clientY);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';

        this.point.update();
        ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
        ctx.fill();
    }
}