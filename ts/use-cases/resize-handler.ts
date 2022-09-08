export class ResizeHandler {
    private element;
    private observerResize;

    constructor(containerEl: HTMLElement, callBack: Function) {
        this.element = containerEl;
        this.observerResize = new ResizeObserver(() => callBack());
    }

    stopObserve(){
        this.observerResize.unobserve();
    }
    
    handleElementResize() {
        this.observerResize.observe(this.element);
    }

    handleChildrenResize() {
        this.handleExistentChildrenResize();
        this.handleNewChildrenResize();
    }

    handleExistentChildrenResize() {
        for (let child of this.element.children) {
            this.observerResize.observe(child);
        }
    }

    handleNewChildrenResize() {
        new MutationObserver((multations) => {
            for (let multation of multations) {
                if (multation.type == 'childList') {
                    this.observeNewChildrenResize(multation);
                    this.unobserveRemovedChildrenResize(multation);
                }
            }
        });
    }

    private observeNewChildrenResize(multation: MutationRecord) {
        for (let node of multation.addedNodes) {
            let element = node as HTMLElement;
            this.observerResize.observe(element);
        };
    }

    private unobserveRemovedChildrenResize(multation: MutationRecord) {
        for (let node of multation.removedNodes) {
            let element = node as HTMLElement;
            this.observerResize.unobserve(element);
        };
    }
}