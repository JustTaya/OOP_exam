class ListView {
    constructor() {
        this._list=new List();
        this._nodes=[];
    }

    addNode_begin(value) {
        this._list.addNode_begin(value);
    }

    addNode_end(value) {
        this._list.addNode_end(value);
    }

    addNode_before(value, position) {
        this._list.addNode_after(value,position);
    }

    deleteNode(value){
        this.deleteNode(value);
    }

    searchNode(value){
        
    }

    update(){
        this._nodes=getListArray(this._list);
    }
}