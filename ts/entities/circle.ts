import { AbstractCircle } from "./abstract-circle.js";
import { Position2D } from "./position-2d.js";

export class Circle extends AbstractCircle {
    constructor(
        public center: Position2D,
        public radius: number,
        public childCircles: AbstractCircle[]) {
        super();
    }
}