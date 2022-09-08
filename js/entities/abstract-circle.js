import { Position2D } from "./position-2d.js";
export class AbstractCircle {
    getCirclePosition(angle) {
        let x = this.center.x - this.radius * Math.cos(angle);
        let y = this.center.y + this.radius * Math.sin(angle);
        return new Position2D(x, y);
    }
    iterateChildren(method) {
        let childrenCircles = this.childCircles;
        let childQuantity = childrenCircles.length;
        for (let childNumber = 0; childNumber < childQuantity; childNumber++) {
            let childCircle = childrenCircles[childNumber];
            let previusChild = childrenCircles[childNumber - 1];
            method(childCircle, childNumber, previusChild, childQuantity);
        }
    }
}
//# sourceMappingURL=abstract-circle.js.map