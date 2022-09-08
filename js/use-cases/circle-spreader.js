import { AbstractCircleDistributer } from "./abstract-circle-distributer.js";
export class CircleSpreader extends AbstractCircleDistributer {
    constructor(circleContainer, anglePhase, angleRangeToDistribute) {
        super(circleContainer, anglePhase);
        this._angleRangeToDistribute = angleRangeToDistribute;
        this.distribute();
    }
    distribute() {
        this.circleContainer.iterateChildren((childCircle, childNumber, previusChild, childQuantity) => {
            let distributionCicle = this.getDistributionCircle(childCircle);
            let angleGap = this.angleRangeToDistribute / childQuantity;
            let childAngle = this.centralizedDistribution(childNumber, angleGap, childQuantity);
            let position = distributionCicle.getCirclePosition(childAngle);
            childCircle.center = position;
        });
    }
    centralizedDistribution(childNumber, angleGap, quantityElements) {
        let initialAngle = -Math.PI / 2 - this.anglePhase;
        let angleToRotate = 0;
        if (quantityElements % 2 == 0) {
            angleToRotate = -angleGap * (childNumber - quantityElements / 2 + 0.5);
        }
        else {
            angleToRotate = -angleGap * Math.round(childNumber - quantityElements / 2);
        }
        let angle = initialAngle + angleToRotate;
        return angle;
    }
    get angleRangeToDistribute() {
        return this._angleRangeToDistribute;
    }
    set angleRangeToDistribute(angle) {
        this._angleRangeToDistribute = angle;
        this.distribute();
    }
}
//# sourceMappingURL=circle-spreader.js.map