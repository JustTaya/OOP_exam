class ListView {
    constructor() {
        this._list = new List();
        this._nodes = [];
    }

    addNode_begin(value) {
        this._list.insertKey_begin(value);
        return this.update();
    }

    addNode_end(value) {
        this._list.insertKey_end(value);
        return this.update();
    }

    addNode_after(value, position) {
        this._list.insertKey_afterKey(value, position)
        return this.update();
    }


    deleteNode(value) {
        this.deleteKey(value);
        return this.update();
    }

    searchNode(value) {
        let node = this._list.searchKey(value);
        let li = new ListIterator(this._list);
        let index = 0;
        while (!li.end()) {
            if (li.current == node) {
                return index;
            }
            index++;
            li.next();
        }
    }

    update() {
        this._nodes = getListArray(this._list);
        return this._nodes;
    }
}