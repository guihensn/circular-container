import { AdapterElementCircle } from "../adapter/adapter-element-circle.js";
import { CircleAligner } from "../use-cases/circle-aligner.js";
import { ResizeHandler } from "../use-cases/resize-handler.js";
export class CircleAlignerFactory {
    make(containerEl, anglePhase, angleGap) {
        containerEl.style.position = "relative";
        let circleContainer = new AdapterElementCircle(containerEl);
        let circleAligner = new CircleAligner(circleContainer, anglePhase, angleGap);
        let resizeHandler = new ResizeHandler(containerEl, () => { circleAligner.distribute(); });
        resizeHandler.handleElementResize();
        resizeHandler.handleChildrenResize();
        return circleAligner;
    }
}
//# sourceMappingURL=circle-aliner-factory.js.map