import { AbstractCircle } from "./abstract-circle.js";
export class Circle extends AbstractCircle {
    constructor(center, radius, childCircles) {
        super();
        this.center = center;
        this.radius = radius;
        this.childCircles = childCircles;
    }
}
//# sourceMappingURL=circle.js.map