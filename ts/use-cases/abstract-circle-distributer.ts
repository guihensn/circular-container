import { AbstractCircle } from "../entities/abstract-circle.js";
import { Circle } from "../entities/circle.js";

export abstract class AbstractCircleDistributer {
    protected circleContainer: AbstractCircle;

    _anglePhase: number;

    constructor(circleContainer: AbstractCircle, anglePhase: number) {
        this.circleContainer = circleContainer;
        this.anglePhase = anglePhase
    }

    abstract distribute();

    protected getDistributionCircle(childCircle: AbstractCircle): AbstractCircle {
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

    get anglePhase(){
        return this._anglePhase;
    }
    
    set anglePhase(anglePhase){
        this._anglePhase = anglePhase;
        this.distribute();
      }
}