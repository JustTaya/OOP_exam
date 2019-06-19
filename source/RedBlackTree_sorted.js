function BinarySearchTreeIterator(tree) {
    this._tree = tree;
}

BinarySearchTreeIterator.prototype.next = function* (current) {
    if (current === undefined)
        current = this._tree._root;
    if (current === null)
        return;
    yield* this.next(current._left);
    yield current.value;
    yield* this.next(current._right);
};

function getSorted(tree){
    let i=new BinarySearchTreeIterator(tree).next(tree._root);
    let current;
    let sorted=[];
    while(!(current=i.next()).done){
        sorted.push({key:current.key});
    }
}
