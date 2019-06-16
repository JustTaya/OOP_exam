class ListNode extends AbstractNode {
    constructor(nodeKey, nodeParent) {
        super(nodeKey, nodeParent);
        this._next = null;
    }

    get next() {
        if (typeof this._next !== 'undefined') {
            return this._next;
        }
        return null;
    }

    set next(newNext) {
        this._next = newNext;
    }
}

class List {
    constructor() {
        this._root = null;
    }

    async insertKey_begin(newKey) {
        let tmp = new ListNode(newKey, null);
        tmp.next = this._root;
        this._root = tmp;
    }
    /*
            async insertKey_begin(newKey) {
                
                while(tmp.next!=this._root){
                    tmp=tmp.next;
                }
                tmp.next = new ListNode(newKey, null);
                tmp.next = this._root;
                this._root = tmp;
            }
    */
    async insertKey_end(newKey) {
        let tmp = this._root;
        while (tmp.next != null) {
            tmp = tmp.next;
        }
        tmp.next = new ListNode(newKey, null);
    }

    /*
        async insertKey_end(newKey) {
            this.insertKey_begin(newKey);
            this._root = this._root.next;
        }
    */
    async insertKey_afterKey(newKey, searchKey) {
        `       
    }

    async deleteKey(newKey) {

    }

async searchKey(newKey) {
        let tmp=this._root;
        while(tmp.next)
        return tmp;
    }
    
}