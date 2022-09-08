export class ResizeHandler {
    constructor(containerEl, callBack) {
        this.element = containerEl;
        this.observerResize = new ResizeObserver(() => callBack());
    }
    stopObserve() {
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
    observeNewChildrenResize(multation) {
        for (let node of multation.addedNodes) {
            let element = node;
            this.observerResize.observe(element);
        }
        ;
    }
    unobserveRemovedChildrenResize(multation) {
        for (let node of multation.removedNodes) {
            let element = node;
            this.observerResize.unobserve(element);
        }
        ;
    }
}
//# sourceMappingURL=resize-handler.js.map