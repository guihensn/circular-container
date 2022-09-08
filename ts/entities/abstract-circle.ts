import { Position2D } from "./position-2d.js";

export abstract class AbstractCircle {
    abstract get radius();
    abstract get center(): Position2D;
    abstract get childCircles(): AbstractCircle[];

    abstract set center(position: Position2D);

    getCirclePosition(angle: number): Position2D {
        let x = this.center.x - this.radius * Math.cos(angle);
        let y = this.center.y + this.radius * Math.sin(angle);
        return new Position2D(x, y);
    }

    iterateChildren(method: Function) {
        let childrenCircles = this.childCircles;
        let childQuantity = childrenCircles.length;

        for (let childNumber = 0; childNumber < childQuantity; childNumber++) {
            let childCircle = childrenCircles[childNumber];
            let previusChild = childrenCircles[childNumber - 1];

            method(childCircle, childNumber, previusChild, childQuantity);
        }
    }
}