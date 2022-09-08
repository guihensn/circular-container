import { AbstractCircle } from "../entities/abstract-circle.js";
import { AbstractCircleDistributer } from "./abstract-circle-distributer.js";

export class CircleAligner extends AbstractCircleDistributer {
  private _angleGap: number;

  constructor(circleContainer: AbstractCircle, anglePhase: number, angleGap: number) {
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
    })
  }

  private calcTotalAngle() {
    let totalRotatedAngle = 0;

    this.circleContainer.iterateChildren((childCircle, childNumber, previusChild) => {
      let angle = 0;

      if (previusChild) {
        angle = this.calcChildAngle(childCircle, previusChild) + this.angleGap;
        totalRotatedAngle += angle;
      }
    })

    return totalRotatedAngle;
  }

  private calcChildAngle(childCircle: AbstractCircle, previusChild: AbstractCircle): number {
    let x1 = this.circleContainer.radius - childCircle.radius;
    let x2 = this.circleContainer.radius - previusChild.radius;
    let h1 = childCircle.radius + previusChild.radius;

    let angleGap = this.laWofCosines(x1, x2, h1);

    return angleGap;
  }


  private laWofCosines(x1: number, x2: number, h1: any): number {
    return Math.acos(
      (Math.pow(x1, 2) + Math.pow(x2, 2) - Math.pow(h1, 2)) / (2 * x1 * x2)
    );
  }

  get angleGap(){
    return this._angleGap;
  }

  set angleGap(angleGap){
    this._angleGap = angleGap;
    this.distribute();
  }
}