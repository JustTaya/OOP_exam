class ListIterator{
    constructor(list){
        if(list!==null){
            this._current=list.root;
        }
        else{
            this._current=null;
        }
    }

    end(){
        if(this._current===null)
            return true;  
        return false;
    }

    next(){
        if(this._current!==null){
            this._current=this._current.next;
        }
    }

    get current(){
        return this._current;
    }
}

function getListArray(list){
    let li=new ListIterator(list);
    let arr=[];
    while(!li.end()){
        arr.push({key: li.current.key,value: li.current.value});
        li.next();
    }
    return arr;
}