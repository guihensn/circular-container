import { AbstractCircle } from "../entities/abstract-circle.js";
export class AdapterElementCircle extends AbstractCircle {
    constructor(element) {
        super();
        this.element = element;
    }
    get radius() {
        return this.element.offsetWidth / 2;
    }
    get center() {
        return {
            x: this.element.offsetWidth / 2,
            y: this.element.offsetHeight / 2
        };
    }
    get childCircles() {
        let childrenEl = this.element.children;
        let childrenCircles = [];
        for (let childEl of childrenEl) {
            childEl.style.position = 'absolute';
            childrenCircles.push(new AdapterElementCircle(childEl));
        }
        return childrenCircles;
    }
    set center(position) {
        this.element.style.left = position.x + "px";
        this.element.style.top = position.y + "px";
    }
}
//# sourceMappingURL=adapter-element-circle.js.map