class AbstractTreeNode extends AbstractNode {
    constructor(nodeKey, nodeParent) {
        super(nodeKey);
        if (this.constructor === AbstractTreeNode) {
            throw new TypeError('Abstract class "AbstractNode" cannot be instantiated directly.');
        }
        this._children = [];
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

class AbstractTree {

    constructor() {
        if (this.constructor === AbstractTree) {
            throw new TypeError('Abstract class "AbstractTree" cannot be instantiated directly.');
        }
        this._root = null;
    }

    insertKey(newKey) {

    }

    deleteKey(_key) {

    }

    searchKey(_key) {

    }

    get root() {
        return this._root;
    }
}