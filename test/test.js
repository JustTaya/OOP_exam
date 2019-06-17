let checkBinaryTreeOrderInvariant = function (node) {
    if (node != null) {
        if (node.left != null) {
            chai.assert(node.key > node.left.key);
            checkBinaryTreeOrderInvariant(node.left);
        }
        if (node.right != null) {
            chai.assert(node.key < node.right.key);
            checkBinaryTreeOrderInvariant(node.right);
        }
    }
};

let checkRedBlackTreeInvariant = function (node) {
    if (node != null) {
        if (node.parent === null) {
            chai.expect(node.color).to.equal(Color.black);
        } else {
            if (node.color == Color.red) {
                if (node.left != null) {
                    chai.expect(node.left.color).to.equal(Color.black);
                }
                if (node.right != null) {
                    chai.expect(node.right.color).to.equal(Color.black);
                }
            }
        }
    }
};

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


describe('RedBlackTree Tree Node', () => {
    var node = new RedBlackNode(3, null);

    it('node should not be empty', () => {
        chai.expect(node.key).to.equal(3);
        chai.expect(node.left).to.equal(null);
        chai.expect(node.right).to.equal(null);
        chai.expect(node.color).to.equal(Color.red);
    });

    it('left getter & setter', () => {
        node.left = new RedBlackNode(2, node);
        chai.expect(node.key).to.equal(3);
        chai.expect(node.left).to.not.equal(null);
        chai.expect(node.left.key).to.equal(2);
    });

    it('right getter & setter', () => {
        node.right = new RedBlackNode(5, node);
        chai.expect(node.key).to.equal(3);
        chai.expect(node.right).to.not.equal(null);
        chai.expect(node.right.key).to.equal(5);
    });

    it('grandparent and uncle getters should work correct', () => {
        node.left = new RedBlackNode(2, node);
        node.left.left = new RedBlackNode(1, node.left);
        node.right = new RedBlackNode(5, node);
        node.right.right = new RedBlackNode(6, node.right);

        var leftGranson = node.left.left;
        var rightGrandson = node.right.right;
        chai.expect(leftGranson.grandparent).to.equal(node);
        chai.expect(leftGranson.uncle).to.equal(node.right);
        chai.expect(rightGrandson.grandparent).to.equal(node);
        chai.expect(rightGrandson.uncle).to.equal(node.left);
    });
});

describe('RedBlackTree Tree', () => {
    it('root should be empty', () => {
        var tree = new RedBlackTree();

        chai.expect(tree.root).to.equal(null);
    });

    describe('Red Black Tree insertion', () => {
        var tree = new RedBlackTree();

        it('Red Black Tree invariants', () => {
            tree.insertKey(3);
            checkBinaryTreeOrderInvariant(tree.root);
            checkRedBlackTreeInvariant(tree.root);
            tree.insertKey(5);
            checkBinaryTreeOrderInvariant(tree.root);
            checkRedBlackTreeInvariant(tree.root);
            tree.insertKey(2);
            checkBinaryTreeOrderInvariant(tree.root);
            checkRedBlackTreeInvariant(tree.root);
            tree.insertKey(1);
            checkBinaryTreeOrderInvariant(tree.root);
            checkRedBlackTreeInvariant(tree.root);
        });
    });

    describe('Red Black Tree search', () => {
        var tree = new RedBlackTree();

        before(() => {
            tree.insertKey(3);
            tree.insertKey(5);
            tree.insertKey(2);
            tree.insertKey(1);
        });
        it("search should return node with searched key", () => {
            chai.expect(tree.searchKey(3).key).to.equal(3);
            chai.expect(tree.searchKey(5).key).to.equal(5);
            chai.expect(tree.searchKey(2).key).to.equal(2);
            chai.expect(tree.searchKey(1).key).to.equal(1);
            chai.expect(tree.searchKey(7)).to.equal(null);
        });
    });
});