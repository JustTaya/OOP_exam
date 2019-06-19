class AbstractNode {
    constructor(nodeKey, nodeValue) {
        if (this.constructor === AbstractNode) {
            throw new TypeError('Abstract class "AbstractNode" cannot be instantiated directly.');
        }
        this._keys = [nodeKey];
        this._values=[nodeValue];
    }
}