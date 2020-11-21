import {Wave} from "./wave";

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = [
            'rgba(164, 230, 87, 0.5)',
            'rgba(228, 230, 87, 0.5)',
            'rgba(50, 73, 87, 0.5)',
        ];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i]
            );

            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}