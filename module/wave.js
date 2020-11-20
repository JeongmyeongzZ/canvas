import {
    Point
} from './point'

export class Wave {
    constructor() {
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.clientX = stageWidth / 2;
        this.clientY = stageHeight / 2;

        this.init();
    }

    init() {
        this.point = new Point(this.clientX, this.clientY);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';

        this.point.update();
        this.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
        this.fill();
    }
}