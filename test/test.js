describe('Linked List Node', () => {
    let node = new ListNode(3, null);

    it('node should not be empty', () => {
        chai.expect(node.key).to.equal(3);
        chai.expect(node.next).to.equal(null);
    });

    it('next getter & setter', () => {
        node.next = new ListNode(2, null);
        chai.expect(node.key).to.equal(3);
        chai.expect(node.next).to.not.equal(null);
        chai.expect(node.next.key).to.equal(2);
    });

});

describe('Linked List', () => {
    it('root should be empty', () => {
        let list = new List();
        chai.expect(list.root).to.equal(null);
    });

    it('insertion ', () => {
        let list = new List();
        chai.expect(list.root).to.equal(null);
        list.searchKey(3).then(function (result) {
            chai.expect(result).to.equal(null);
        });
        list.insertKey_begin(3);
        chai.expect(list.root).to.not.equal(null);
        chai.expect(list.root.key).to.equal(3);
        list.searchKey(3).then(function (result) {
            chai.expect(result).to.equal(list.root);
        });

        list.searchKey(5).then(function (result) {
            chai.expect(result).to.equal(null);
        });
        list.insertKey_end(5);
        chai.expect(list.root.next).to.not.equal(null);
        chai.expect(list.root.next.key).to.equal(5);
        list.searchKey(5).then(function (result) {
            chai.expect(result).to.equal(list.root.next);
        });

        list.searchKey(2).then(function (result) {
            chai.expect(result).to.equal(null);
        });
        list.insertKey_begin(2);
        chai.expect(list.root).to.not.equal(null);
        chai.expect(list.root.key).to.equal(2);
        list.searchKey(2).then(function (result) {
            chai.expect(result).to.equal(list.root);
        });

        list.searchKey(1).then(function (result) {
            chai.expect(result).to.equal(null);
        });
        list.insertKey_afterKey(1, 3);
        list.searchKey(3).then(function (result) {
            chai.expect(result.next.key).to.equal(1);
        });
    });

    it('deletion', () => {
        let list = new List();
        list.insertKey_begin(3);
        list.insertKey_end(5);
        list.insertKey_begin(2);
        list.insertKey_afterKey(1, 3);

        list.searchKey(1).then(function (result) {
            chai.expect(result).to.not.equal(null);
        });
        list.deleteKey(1);
        list.searchKey(1).then(function (result) {
            chai.expect(result).to.equal(null);
        });

        list.searchKey(2).then(function (result) {
            chai.expect(result).to.not.equal(null);
        });
        list.deleteKey(2);
        list.searchKey(2).then(function (result) {
            chai.expect(result).to.equal(null);
        });
        chai.expect(list._root).to.not.equal(null);

        list.searchKey(5).then(function (result) {
            chai.expect(result).to.not.equal(null);
        });
        list.deleteKey(5);
        list.searchKey(5).then(function (result) {
            chai.expect(result).to.equal(null);
        });

        list.searchKey(3).then(function (result) {
            chai.expect(result).to.not.equal(null);
        });
        list.deleteKey(3);
        list.searchKey(3).then(function (result) {
            chai.expect(result).to.equal(null);
        });
        chai.expect(list._root).to.equal(null);
    });


});