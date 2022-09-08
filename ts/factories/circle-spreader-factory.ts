import { AdapterElementCircle } from "../adapter/adapter-element-circle.js";
import { CircleSpreader } from "../use-cases/circle-spreader.js";
import { ResizeHandler } from "../use-cases/resize-handler.js";

export class CircleSpreaderFactory{
    make(containerEl:HTMLElement, anglePhase: number, distributionAngle: number){
        containerEl.style.position = "relative";

        let circleContainer = new AdapterElementCircle(containerEl);
        let circleSpreader = new CircleSpreader(circleContainer, anglePhase, distributionAngle);
        let resizeHandler = new ResizeHandler(containerEl, ()=>{circleSpreader.distribute()});
        
        resizeHandler.handleElementResize();
        resizeHandler.handleChildrenResize();

        return circleSpreader;
    }
}