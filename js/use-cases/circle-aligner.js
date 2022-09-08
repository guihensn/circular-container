import { AbstractCircleDistributer } from "./abstract-circle-distributer.js";
export class CircleAligner extends AbstractCircleDistributer {
    constructor(circleContainer, anglePhase, angleGap) {
        super(circleContainer, anglePhase);
        this._angleGap = angleGap;
        this.distribute();
    }
    distribute() {
        let totalRotatedAngle = this.calcTotalAngle();
        let angleCounter = this.getInitialAngle() + totalRotatedAngle / 2;
        this.circleContainer.iterateChildren((childCircle, childNumber, previusChild) => {
            let angle = 0;
            if (previusChild) {
                angle = this.calcChildAngle(childCircle, previusChild) + this.angleGap;
            }
            angleCounter += -angle;
            let distributionCicle = this.getDistributionCircle(childCircle);
            let position = distributionCicle.getCirclePosition(angleCounter);
            childCircle.center = position;
        });
    }
    calcTotalAngle() {
        let totalRotatedAngle = 0;
        this.circleContainer.iterateChildren((childCircle, childNumber, previusChild) => {
            let angle = 0;
            if (previusChild) {
                angle = this.calcChildAngle(childCircle, previusChild) + this.angleGap;
                totalRotatedAngle += angle;
            }
        });
        return totalRotatedAngle;
    }
    calcChildAngle(childCircle, previusChild) {
        let x1 = this.circleContainer.radius - childCircle.radius;
        let x2 = this.circleContainer.radius - previusChild.radius;
        let h1 = childCircle.radius + previusChild.radius;
        let angleGap = this.laWofCosines(x1, x2, h1);
        return angleGap;
    }
    laWofCosines(x1, x2, h1) {
        return Math.acos((Math.pow(x1, 2) + Math.pow(x2, 2) - Math.pow(h1, 2)) / (2 * x1 * x2));
    }
    get angleGap() {
        return this._angleGap;
    }
    set angleGap(angleGap) {
        this._angleGap = angleGap;
        this.distribute();
    }
}
//# sourceMappingURL=circle-aligner.js.map