class ListView {
    constructor() {
        this._list = new List();
        this._nodes = [];
    }

    addNode_begin(key, value) {
        this._list.insertKey_begin(key,value);
        return this.update();
    }

    addNode_end(key, value) {
        this._list.insertKey_end(key, value);
        return this.update();
    }

    addNode_after(key, value, position) {
        this._list.insertKey_afterKey(key, value, position)
        return this.update();
    }


    deleteNode(value) {
        this._list.deleteKey(value);
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