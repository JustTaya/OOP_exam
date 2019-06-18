class ListView {
    constructor() {
        this._list=new List();
        this._nodes=[];
    }

    addNode_begin(value) {
        this._list.addNode_begin(value);
        return this.update();
    }

    addNode_end(value) {
        this._list.addNode_end(value);
        return this.update();
    }

    addNode_before(value, position) {
        this._list.addNode_after(value,position);
        return this.update();
    }


    deleteNode(value){
        this.deleteNode(value);
        return this.update();
    }

    searchNode(value){
        let node=this._list.searchNode(value);
        let li=new ListIterator(this._list);
        let index=0;
        while(!li.end()){
            if(li.current==node){
                return index;
            }
            index++;
        }
    }

    update(){
        this._nodes=getListArray(this._list);
        return this._nodes;
    }
}