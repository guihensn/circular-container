import { AbstractCircle } from "../entities/abstract-circle.js";

export class AdapterElementCircle extends AbstractCircle {
    private element;

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

    get childCircles(): AbstractCircle[] {
        let childrenEl = this.element.children;
        let childrenCircles: AbstractCircle[] = [];

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