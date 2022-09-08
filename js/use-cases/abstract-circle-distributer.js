import { Circle } from "../entities/circle.js";
export class AbstractCircleDistributer {
    constructor(circleContainer, anglePhase) {
        this.circleContainer = circleContainer;
        this.anglePhase = anglePhase;
    }
    getDistributionCircle(childCircle) {
        let relativeRadius = this.circleContainer.radius - childCircle.radius;
        let relativeCenter = {
            x: this.circleContainer.center.x - childCircle.center.x,
            y: this.circleContainer.center.y - childCircle.center.y
        };
        return new Circle(relativeCenter, relativeRadius, []);
    }
    getInitialAngle() {
        return -Math.PI / 2 - this.anglePhase;
    }
    get anglePhase() {
        return this._anglePhase;
    }
    set anglePhase(anglePhase) {
        this._anglePhase = anglePhase;
        this.distribute();
    }
}
//# sourceMappingURL=abstract-circle-distributer.js.map