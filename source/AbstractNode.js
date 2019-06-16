class AbstractNode {
    constructor(nodeKey, nodeParent) {
        if (this.constructor === AbstractNode) {
            throw new TypeError('Abstract class "AbstractNode" cannot be instantiated directly.');
        }
        this._keys = [nodeKey];
        this._parent = nodeParent;
    }

    get parent() {
        if (typeof this._parent !== 'undefined') {
            return this._parent;
        }
        return null;
    }

    set parent(newParent) {
        this._parent = newParent;
    }
}